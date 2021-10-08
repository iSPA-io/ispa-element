import { mount } from '@vue/test-utils'
import Modal from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Modal.vue', () => {
  test('render test', () => {
    const wrapper = mount(Modal, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
