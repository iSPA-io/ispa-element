import { mount } from '@vue/test-utils'
import FormItem from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('FormItem.vue', () => {
  test('render test', () => {
    const wrapper = mount(FormItem, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
