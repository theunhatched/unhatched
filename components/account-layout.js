import React from 'react'
import PropTypes from 'prop-types'
import { getLayout as getDefaultLayout } from './default-layout'

const AccountLayout = ({ children }) => {
  return <div>{children}</div>
}

export const getLayout = (page) => {
  return getDefaultLayout(
    <AccountLayout styles={{ foo: 'bar' }}>{page}</AccountLayout>,
    { background: '#ffffff' }
  )
}

AccountLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AccountLayout
