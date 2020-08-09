import React from 'react'
import NavList from './nav-list'
import NavItem from './nav-item'

const SignedOut = () => (
  <NavList>
    <NavItem href="/about-us">About Us</NavItem>
    <NavItem href="/become-a-donor" cta>
      Become a Donor
    </NavItem>
    <NavItem href="/api/login">Log In</NavItem>
    <NavItem href="/api/signup">Sign up for Free</NavItem>
  </NavList>
)

export default SignedOut
