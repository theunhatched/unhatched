import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import cx from 'classnames'

const NavItem = ({ href, children, cta }) => (
  <li className={cx({ NavItem: true, CTA: cta })}>
    <Link href={href}>
      <a>{children}</a>
    </Link>
    <style jsx>{`
      .NavItem {
        font-size: 16px;
        color: #0d1c66;
        margin: 18px 0px;
        padding: 9px 38px;

        font-family: Oswald;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        /* identical to box height */
        color: #0d1c66;
      }
      a {
        font-family: Oswald;
        font-style: normal;
        font-weight: normal;
        color: inherit;
        text-decoration: none;
      }
      .NavItem.CTA {
        box-sizing: boder-box;
        border-radius: 4px;*/
        margin: 18px 28px;
        border: 1.5px solid #ffffff;
        box-sizing: border-box;
        border-radius: 4px;
      }
    `}</style>
  </li>
)

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.any,
  cta: PropTypes.bool,
}

NavItem.defaultProps = {
  children: [],
  cta: false,
}

export default NavItem
