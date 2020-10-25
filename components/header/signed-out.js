import React from 'react'
import NavList from './nav-list'
import NavItem from './nav-item'

const SignedOut = () => (
  <NavList>
    <NavItem href="/about">About us</NavItem>
    <NavItem href="/donor" cta>
      Become a Donor
    </NavItem>
    <NavItem href="/api/login">Log in</NavItem>
    <NavItem href="/api/signup">Sign up for free</NavItem>
  </NavList>
)

export default SignedOut
