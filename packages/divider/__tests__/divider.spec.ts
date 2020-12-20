import { mount } from '@vue/test-utils'
import Divider from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Divider.vue', () => {
  test('render test', () => {
    const wrapper = mount(Divider, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
