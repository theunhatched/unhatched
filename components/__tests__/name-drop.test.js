import React from 'react'
import { mount } from 'enzyme'
import NameDrop from '../name-drop'

import * as user from '../../lib/user'

describe('NameDrop', () => {
  beforeEach(() => {
    user.useFetchUser = jest.fn()
    user.useFetchUser.mockReturnValue({
      loading: false,
      user: { nickname: 'Alice' },
    })
  })

  it('shows name', () => {
    expect.assertions(1)
    const wrapper = mount(<NameDrop />)
    expect(wrapper.text()).toEqual('Alice')
  })

  it('shows prefix', () => {
    expect.assertions(1)
    const wrapper = mount(<NameDrop prefix="Ms. " />)
    expect(wrapper.text()).toEqual('Ms. Alice')
  })

  it('shows suffix', () => {
    expect.assertions(1)
    const wrapper = mount(<NameDrop suffix=" the Destroyer" />)
    expect(wrapper.text()).toEqual('Alice the Destroyer')
  })

  it('shows both prefix and suffix', () => {
    expect.assertions(1)
    const wrapper = mount(<NameDrop prefix="Hello, " suffix="!" />)
    expect(wrapper.text()).toEqual('Hello, Alice!')
  })
})
