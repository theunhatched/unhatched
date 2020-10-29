import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Link from 'next/link'

const Marker = ({ active, children }) => {
  return (
    <div
      className={cx(
        active
          ? 'border-2 border-carnation text-carnation font-extrabold'
          : 'bg-ballerina text-white',
        'text-xl rounded-full h-12 w-12 flex items-center justify-center'
      )}
    >
      {children}
    </div>
  )
}

const Step = ({ n, active, href, children }) => {
  return (
    <>
      <Marker active={active}>{n}</Marker>
      <div className="h-12 px-3 flex items-center justify-center active">
        <Link href={href}>
          <a className={cx({ 'text-opacity-50': !active }, 'text-black')}>
            {children}
          </a>
        </Link>
      </div>
    </>
  )
}

const Bar = () => (
  <>
    <div className="h-12 px-3 flex items-center justify-center">
      <hr />
    </div>
    <style jsx>
      {`
        hr {
          border: none;
          height: 1px;
          background-color: #d8d8d8;
          width: 74px;
        }
      `}
    </style>
  </>
)

const ProfileSteps = ({ active }) => {
  return (
    <div className="flex flex-row">
      <Step n={1} href="/donor" active={active === 'basic'}>
        Basic details
      </Step>
      <Bar />
      <Step n={2} href="/profile" active={active === 'profile'}>
        Your genetic profile
      </Step>
      <Bar />
      <Step n={3} href="/payment" active={active === 'payment'}>
        Payout info
      </Step>
    </div>
  )
}

ProfileSteps.propTypes = {
  active: PropTypes.string,
}

ProfileSteps.defaultProps = {
  active: undefined,
}

export default ProfileSteps
