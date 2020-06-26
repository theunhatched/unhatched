import React from 'react'
import { shallow } from 'enzyme'
import AccountLayout from '../account-layout'

const BUT_REALLY = "epstein didn't kill himself"

describe('account-layout', () => {
  it('renders account-layout', () => {
    expect.assertions(1)
    const wrapper = shallow(
      <AccountLayout>
        <div id="content">{BUT_REALLY}</div>
      </AccountLayout>
    )
    expect(wrapper.find('div#content').text()).toBe(BUT_REALLY)
  })
})
