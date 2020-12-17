// import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'
// import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import pkg from '../package.json'
const deps = Object.keys(pkg.dependencies)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const vue = require('rollup-plugin-vue')
import postcss from 'rollup-plugin-postcss'

export default [
  {
    input: path.resolve(__dirname, '../packages/ispa-element/index.ts'),
    output: {
      format: 'es',
      file: 'lib/index.esm.js',
    },
    plugins: [
      terser(),
      nodeResolve(),
      // commonjs(),
      vue({
        target: 'browser',
        css: true,
        exposeFilename: true,
      }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            module: 'ESNext',
            declaration: true,
            noImplicitAny: false,
            removeComments: true,
            moduleResolution: 'node',
            esModuleInterop: true,
            resolveJsonModule: true,
            jsx: 'preserve',
            noLib: false,
            target: 'es6',
            sourceMap: true,
            lib: [
              'ESNext', 'DOM',
            ],
            allowSyntheticDefaultImports: true,
          },
          'include': [
            'packages/**/*',
            'typings/vue-shim.d.ts',
          ],
          'exclude': [
            'node_modules',
            '__tests__/',
          ],
        },
        abortOnError: false,
      }),
      postcss({
        minimize: true,
        modules: false,
        use: {
          sass: null,
          stylus: null,
          less: { javascriptEnabled: true },
        },
        extract: false,
      }),
    ],
    external(id) {
      return /^vue/.test(id) ||
        deps.some(k => new RegExp('^' + k).test(id))
    },
  },
]
