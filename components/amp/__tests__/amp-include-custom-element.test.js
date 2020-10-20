import React from 'react'
import { shallow } from 'enzyme'
import AmpIncludeCustomElement from '../amp-include-custom-element'

describe('AmpIncludeCustomElement', () => {
  subject(() =>
    shallow(<AmpIncludeCustomElement name="name" version="1.9.3" />)
  )

  it('contains the script link', () => {
    expect($subject).toContainReact(
      <script
        async
        custom-element="name"
        src="https://cdn.ampproject.org/v0/name-1.9.3.js"
      />
    )
  })
})
