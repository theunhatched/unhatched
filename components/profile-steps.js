import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Link from 'next/link'

const Footer = ({ active }) => {
  return (
    <>
      [{' '}
      <Link href="/donor" className={cx({ active: active === 'basic' })}>
        Basic details
      </Link>{' '}
      |{' '}
      <Link href="/profile" className={cx({ active: active === 'profile' })}>
        Your genetic profile
      </Link>{' '}
      |{' '}
      <Link href="/payment" className={cx({ active: active === 'payout' })}>
        Payout info
      </Link>{' '}
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
