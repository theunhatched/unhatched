import React from 'react'
import { mount } from 'enzyme'
import Header from '../header'

describe('header', () => {
  it('renders a header', () => {
    expect.assertions(1)
    const wrapper = mount(<Header />)
    expect(wrapper.find('div.Logo').text()).toBe('unhatched')
  })
})
