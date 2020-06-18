import React from 'react'
import Link from 'next/link'

const Header = () => (
  <div className="Header">
    <h1>
      <Link href="/">
        <div className="Logo">unhatched</div>
      </Link>
    </h1>
    <ul className="LinkList">
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/donor">Become a Donor</Link>
      </li>
      <li>
        <Link href="/account/login">Log in</Link>
      </li>
      <li>
        <Link class="CTA" href="/account/signup">
          Sign up for Free
        </Link>
      </li>
    </ul>
    <style jsx>{`
      .Header {
        border: 1px dashed green;
        grid-area: head;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        display: grid;
        grid-template:
          'logo link'
          / 1fr;
      }
      .Logo {
        border: 1px dashed orange;
        grid-area: foot;
        padding: 22px 40px;
        font-family: Playfair Display;
        font-style: normal;
        font-weight: 900;
        font-size: 25px;
        color: #0d1c66;
      }
      .LinkList {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        list-style: none;
      }
      .LinkList li {
        border: 1px dashed red;
        padding: 9px 38px;
        font-size: 16px;
        color: #0d1c66;
      }
      .LinkList li a {
        border: 1px dashed blue;
        font-family: Oswald;
        font-style: normal;
        font-weight: normal;
      }
      .CTA {
        border: 1.5px solid #f69291;
        box-sizing: boder-box;
        border-radius: 4px;
      }
    `}</style>
  </div>
)

export default Header
