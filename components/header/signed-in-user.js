import React from 'react'
import NavList from './nav-list'
import NavItem from './nav-item'

const SignedInUser = () => (
  <NavList>
    <NavItem href="/community">Community</NavItem>
    <NavItem href="/donor">Become a Donor</NavItem>
    <NavItem href="/dashboard">Dashboard</NavItem>
    <NavItem href="/api/logout">Logout</NavItem>
  </NavList>
)

export default SignedInUser
