import React from 'react'
import { shallow } from 'enzyme'
import Layout from '../layout'

describe('layout', () => {
  it('renders default-layout', () => {
    expect.assertions(1)
    const wrapper = shallow(
      <Layout>
        <div className="pageContent">page content</div>
      </Layout>
    )
    expect(wrapper.find('div.pageContent')).toHaveLength(1)
  })
})
