import React from 'react'
import { shallow } from 'enzyme'
import DefaultLayout from '../default-layout'

describe('default-layout', () => {
  it('renders default-layout', () => {
    expect.assertions(1)
    const wrapper = shallow(
      <DefaultLayout>
        <div className="pageContent">page content</div>
      </DefaultLayout>
    )
    expect(wrapper.find('div.pageContent')).toHaveLength(1)
  })
})
