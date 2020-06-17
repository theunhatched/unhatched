import React from 'react'
import Link from 'next/link'

const Header = () => (
  <div className="Header">
    <h1>
      <Link href="/">Unhatched</Link>
    </h1>
    <ul>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/donor">Become a Donor</Link>
      </li>
      <li>
        <Link href="/login">Log in</Link>
      </li>
      <li>
        <Link href="/signup">Sign up for Free</Link>
      </li>
    </ul>
    <style jsx>{`
      .Header {
        background-color: #a7bed3;
        color: white;
        width: 100%;
      }
    `}</style>
  </div>
)

export default Header
