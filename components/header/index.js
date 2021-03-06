import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useFetchUser } from '../../lib/user'

import SignedOut from './signed-out'
import SignedInUser from './signed-in-user'

const Header = ({ style }) => {
  const { user, loading } = useFetchUser()
  return (
    <div className="Header">
      <h1 className="flex items-center">
        <div className="Logo">
          <Link href="/">
            <a className="mt-6">unhatched</a>
          </Link>
        </div>
      </h1>

      {(!loading && !user && <SignedOut />) ||
        (!user?.donor && <SignedInUser user={user} />)}
      <style jsx>{`
        .Header {
          grid-area: head;
          display: grid;
          grid-template:
            'logo link'
            / 1fr;
          ${style.backgroundColor !==
            Header.defaultProps.style.backgroundColor &&
          'box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);'}
        }
        .Logo {
          grid-area: foot;
        }
        a {
          padding: 22px 0 22px 40px;
          font-family: Playfair Display;
          font-style: normal;
          font-weight: 900;
          font-size: 30px;
          line-height: 40px;
          color: #0d1c66;
        }
      `}</style>
    </div>
  )
}

Header.propTypes = {
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
  }),
}

Header.defaultProps = {
  style: {
    backgroundColor: '#ffffff',
  },
}

export default Header
