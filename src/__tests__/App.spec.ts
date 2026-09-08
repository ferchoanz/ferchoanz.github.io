import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'
import i18n from '@/i18n'

describe('App', () => {
  it('renders the main heading', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [i18n],
      },
    })
    expect(wrapper.text()).toContain('Fernando Pacheco')
  })
})
