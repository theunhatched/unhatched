import React from 'react'
import { shallow } from 'enzyme'
import AmpAnalytics from '../amp-analytics'

describe('amp-analytics', () => {
  subject(() => shallow(<AmpAnalytics type="type" script="script" />))

  it('contains amp-analytics', () => {
    expect($subject.find('amp-analytics')).toExist()
  })
  it('contains a script', () => {
    expect($subject.find('script')).toExist()
  })
})
