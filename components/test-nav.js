import React from 'react'
import Link from 'next/link'

const TestNav = () => (
  <ul>
    <li>
      <Link href="/testlogin">
        <a>testlogin</a>
      </Link>
    </li>
    <li>
      <Link href="/testsignup">
        <a>testsignup</a>
      </Link>
    </li>
    <li>
      <Link href="/api/logout">
        <a>testlogout</a>
      </Link>
    </li>
    <li>
      <Link href="/testhasura">
        <a>testhasura</a>
      </Link>
    </li>
    <li>
      <Link href="/testform">
        <a>testform</a>
      </Link>
    </li>
  </ul>
)

export default TestNav
