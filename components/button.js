import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Button = ({ children, href, primary }) => (
  <>
    <button type="button" className={cx(primary ? 'primary' : 'default')}>
      <a href={href}>{children}</a>
    </button>
    <style jsx>
      {`
        .default {
          margin-left: 30px;
          padding: 10px 50px;

          background: #ffd7d7;
          border: 1.5px solid #fdfdfd;
          box-sizing: border-box;
          border-radius: 4px;

          font-family: Oswald;
          font-style: normal;
          font-weight: normal;
          font-size: 21px;
          line-height: 31px;

          color: #0d1c66;

          width: 217px;
          height: 57px;
        }
        .primary {
          padding: 10px 50px;

          color: #fdfdfd;
          background: #0d1c66;
          box-shadow: 0px 4px 14px rgba(13, 28, 102, 0.38);
          border-radius: 4px;

          font-family: Oswald;
          font-style: normal;
          font-weight: normal;
          font-size: 21px;
          line-height: 31px;

          width: 217px;
          height: 57px;
        }
      `}
    </style>
  </>
)

Button.propTypes = {
  primary: PropTypes.bool,
  href: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}

Button.defaultProps = {
  primary: false,
}

export default Button
