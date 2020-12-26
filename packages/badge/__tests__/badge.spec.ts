import { mount } from '@vue/test-utils'
import Badge from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Badge.vue', () => {
  test('render test', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
