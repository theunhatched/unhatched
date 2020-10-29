import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Footer = ({ active }) => {
  return (
    <>
      [{' '}
      <a href="/donor" className={cx({ active: active === 'basic' })}>
        Basic details
      </a>{' '}
      |{' '}
      <a href="/profile" className={cx({ active: active === 'profile' })}>
        Your genetic profile
      </a>{' '}
      |{' '}
      <a href="/payment" className={cx({ active: active === 'payout' })}>
        Payout info
      </a>{' '}
      ]
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
