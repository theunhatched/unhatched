import React from 'react'
import { mount } from 'enzyme'
import Index from '../pages'

describe('index', () => {
  it('renders a index', () => {
    expect.assertions(1)
    const wrapper = mount(<Index />)
    expect(wrapper.find('h2').text()).toBe(
      "We're a woman-first fertility service."
    )
  })
})
