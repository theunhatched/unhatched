import React from 'react'
import PropTypes from 'prop-types'

const NavList = ({ children }) => (
  <ul className="NavList">
    {children}
    <style jsx>
      {`
        .NavList {
          display: flex;
          flex-wrap: nowrap;
          justify-content: flex-end;
          list-style: none;
        }
      `}
    </style>
  </ul>
)

NavList.propTypes = {
  children: PropTypes.any,
}

NavList.defaultProps = {
  children: [],
}

export default NavList
