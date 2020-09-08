import React from 'react'
import { mount } from 'enzyme'
import Header from '../header'

import * as user from '../../lib/user'

describe('header', () => {
  beforeEach(() => {
    user.useFetchUser = jest.fn()
    user.useFetchUser.mockReturnValue({
      loading: false,
      user: {},
    })
  })

  it('renders a header', () => {
    expect.assertions(1)

    const wrapper = mount(<Header />)
    expect(wrapper.find('div.Logo').text()).toBe('unhatched')
  })
})
