import React from 'react'
import { mount } from 'enzyme'
import NavItem from '../nav-item'

describe('nav-item', () => {
  it('renders a nav-item', () => {
    expect.assertions(1)
    const wrapper = mount(<NavItem href="/destination">linktext</NavItem>)
    expect(wrapper.text()).toEqual('linktext')
  })
})
