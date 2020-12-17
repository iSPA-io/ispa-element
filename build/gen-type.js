/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const { noElPrefixFile } = require('./common')

const outsideImport = /import .* from '..\/(.*?)\/src\/.*/

// index.d.ts
const newIndexPath = path.resolve(__dirname, '../lib/index.d.ts')
fs.copyFileSync(path.resolve(__dirname, '../lib/ispa-element/index.d.ts'), newIndexPath)
const index = fs.readFileSync(newIndexPath)
const newIndex = index.toString().replace(/@ispa-element\//g, './i-').replace('i-utils', 'utils')
fs.writeFileSync(newIndexPath, newIndex)

// remove ep
fs.rmdirSync(path.resolve(__dirname, '../lib/ispa-element'), { recursive: true })

// remove test-utils
fs.rmdirSync(path.resolve(__dirname, '../lib/test-utils'), { recursive: true })

// component
const libDirPath = path.resolve(__dirname, '../lib')
fs.readdirSync(libDirPath).forEach(comp => {
  if (!noElPrefixFile.test(comp)) {
    if (fs.lstatSync(path.resolve(libDirPath, comp)).isDirectory()) {
      // rename
      const newCompName = `i-${comp}`
      fs.renameSync(path.resolve(libDirPath, comp),
        path.resolve(libDirPath, newCompName))
      // re-import
      const imp = fs.readFileSync(path.resolve(__dirname, '../lib', newCompName, 'index.d.ts')).toString()
      if(outsideImport.test(imp) || imp.includes('@ispa-element/')) {
        const newImp = imp.replace(outsideImport, (i, c) => {
          return i.replace(`../${c}`, `../i-${c}`)
        }).replace('@ispa-element/', '../i-')
        fs.writeFileSync(path.resolve(__dirname, '../lib', newCompName, 'index.d.ts'), newImp)
      }
    }
  }
})

