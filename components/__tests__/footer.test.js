import React from 'react'
import { mount } from 'enzyme'
import Footer from '../footer'

describe('footer', () => {
  it('renders a footer', () => {
    expect.assertions(1)
    const wrapper = mount(<Footer />)
    expect(wrapper.find('footer').text()).toBe('')
  })
})
