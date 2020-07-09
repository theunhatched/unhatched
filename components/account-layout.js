import React from 'react'
import PropTypes from 'prop-types'
import { getLayout as getDefaultLayout } from './default-layout'

const AccountLayout = ({ children }) => <>{children}</>

export const getLayout = (page) =>
  getDefaultLayout(<AccountLayout>{page}</AccountLayout>, {
    background: '#ffffff',
  })

AccountLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AccountLayout
