import React from 'react'
import { shallow } from 'enzyme'
import HeroLayout from '../hero-layout'

const BUT_REALLY = "epstein didn't kill himself"

describe('hero-layout', () => {
  it('renders hero-layout', () => {
    expect.assertions(1)
    const wrapper = shallow(
      <HeroLayout>
        <div id="content">{BUT_REALLY}</div>
      </HeroLayout>
    )
    expect(wrapper.find('div#content').text()).toBe(BUT_REALLY)
  })
})
