import React from 'react'
import PropTypes from 'prop-types'
import { getLayout as getDefaultLayout } from './default-layout'

const HeroLayout = ({ children }) => <>{children}</>

export const getLayout = (page) =>
  getDefaultLayout(<HeroLayout>{page}</HeroLayout>, {
    background: '#f0a3a1',
  })

HeroLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default HeroLayout
