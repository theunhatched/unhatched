import React from 'react'
import { mount } from 'enzyme'
import ProfileSteps from '../profile-steps'

describe('ProfileSteps', () => {
  it('basic steps', () => {
    expect.assertions(1)
    const wrapper = mount(<ProfileSteps active="basic" />)
    expect(wrapper).toMatchSnapshot()
  })

  it('profile steps', () => {
    expect.assertions(1)
    const wrapper = mount(<ProfileSteps active="profile" />)
    expect(wrapper).toMatchSnapshot()
  })

  it('payout steps', () => {
    expect.assertions(1)
    const wrapper = mount(<ProfileSteps active="payout" />)
    expect(wrapper).toMatchSnapshot()
  })
})
