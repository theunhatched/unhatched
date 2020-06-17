import React from 'react'
import PropTypes from 'prop-types'
import { getLayout as getDefaultLayout } from './default-layout'

const AccountLayout = ({ children }) => (
  <div>
    account layout
    <hr />
    {children}
  </div>
)

export const getLayout = (page) =>
  getDefaultLayout(<AccountLayout>{page}</AccountLayout>)

AccountLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AccountLayout
