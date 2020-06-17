import React from 'react'
import PropTypes from 'prop-types'
import { getLayout as getSiteLayout } from './site-layout'

// https://codesandbox.io/s/5-getlayout-function-on-page-and-layout-components-7e1bg

const AccountLayout = ({ children }) => (
  <div>
    account layout
    <hr />
    {children}
  </div>
)

export const getLayout = (page) =>
  getSiteLayout(<AccountLayout>{page}</AccountLayout>)

AccountLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AccountLayout
