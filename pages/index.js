import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="Index">
      <ul>
        <li>
          <Link href="/testlogin">
            <a>testlogin</a>
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
      </ul>
      <center>
        <h1>We&apos;re coming soon...</h1>
      </center>
      <img src="/woman-illustration.svg" className="illustration" alt="" />
    </div>
  )
}
