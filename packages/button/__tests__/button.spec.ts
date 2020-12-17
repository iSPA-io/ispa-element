import { mount } from '@vue/test-utils'
import Button from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Button.vue', () => {
  test('render test', () => {
    const wrapper = mount(Button, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
