import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useUser } from '../../lib/user'

import SignedOut from './signed-out'
import SignedInDonor from './signed-in-donor'
import SignedInUser from './signed-in-user'

const Header = ({ style }) => {
  const { user, loading } = useUser()
  return (
    <div className="Header">
      <h1>
        <div className="Logo">
          <Link href="/">
            <a>unhatched</a>
          </Link>
        </div>
      </h1>

      {(!loading && !user && <SignedOut />) ||
        (user?.donor && <SignedInDonor user={user} />) ||
        (!user?.donor && <SignedInUser user={user} />)}
      <style jsx>{`
        .Header {
          grid-area: head;
          display: grid;
          grid-template:
            'logo link'
            / 1fr;
          ${style?.backgroundColor === undefined &&
          'box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);'}
        }
        .Logo {
          grid-area: foot;
          padding: 22px 0 22px 40px;
          font-family: Playfair Display;
          font-style: normal;
          font-weight: 900;
          font-size: 25px;
          color: #0d1c66;

          font-family: Playfair Display;
          font-style: normal;
          font-weight: 900;
          font-size: 30px;
          line-height: 40px;
          /* identical to box height */

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
    backgroundColor: 'auto',
  },
}

export default Header
