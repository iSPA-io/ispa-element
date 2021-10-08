import { mount } from '@vue/test-utils'
import Overlay from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Overlay.vue', () => {
  test('render test', () => {
    const wrapper = mount(Overlay, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
