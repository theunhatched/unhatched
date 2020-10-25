import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Footer = ({ active }) => {
  return (
    <>
      <ul>
        <li className={cx({ active: active === 'basic' })}>Basic details</li>
        <li className={cx({ active: active === 'profile' })}>
          Your genetic profile
        </li>
        <li className={cx({ active: active === 'payout' })}>Payout info</li>
      </ul>
      <style jsx>
        {`
          .active {
            font-weight: bold;
          }
        `}
      </style>
    </>
  )
}

Footer.propTypes = {
  active: PropTypes.string,
}

Footer.defaultProps = {
  active: undefined,
}

export default Footer
