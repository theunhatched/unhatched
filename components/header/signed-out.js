import React from 'react'
import NavList from './nav-list'
import NavItem from './nav-item'

const SignedOut = () => (
  <NavList>
    <NavItem href="/about">About Us</NavItem>
    <NavItem href="/become-a-donor">Become a Donor</NavItem>
    <NavItem href="/api/login">Log In</NavItem>
    <NavItem href="/api/signup" cta>
      Sign up for Free
    </NavItem>
  </NavList>
)

export default SignedOut
