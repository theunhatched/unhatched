import React from 'react'
import Link from 'next/link'
import { useUser } from '../lib/user'

const Header = () => {
  const { user, loading } = useUser()
  return (
    <div className="Header">
      <h1>
        <div className="Logo">
          <Link href="/">
            <a>unhatched</a>
          </Link>
        </div>
      </h1>

      <ul className="LinkList">
        <li className="LinkItem">
          <Link href="/about">
            <a>ABOUT US</a>
          </Link>
        </li>
        <li className="LinkItem">
          <Link href="/donor">
            <a>BECOME A DONOR</a>
          </Link>
        </li>
        {!loading && user ? (
          <>
            <li className="LinkItem">
              <Link href="/account/basic">
                <a>ACCOUNT</a>
              </Link>
            </li>
            <li className="LinkItem">
              <Link href="/api/logout">
                <a>LOGOUT</a>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="LinkItem">
              <Link href="/api/login">
                <a>LOG IN</a>
              </Link>
            </li>
            <li className="LinkItem CTA">
              <Link href="/account/signup">
                <a>SIGN UP FOR FREE</a>
              </Link>
            </li>
          </>
        )}
      </ul>
      <style jsx>{`
        .Header {
          grid-area: head;
          display: grid;
          grid-template:
            'logo link'
            / 1fr;

          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }
        .Logo {
          grid-area: foot;
          padding: 22px 0 22px 40px;
          font-family: Playfair Display;
          font-style: normal;
          font-weight: 900;
          font-size: 25px;
          color: #0d1c66;

          /* unhatched 
        position: absolute;
        width: 150px;
        height: 40px;
        left: 40px;
        top: 27px;*/

          font-family: Playfair Display;
          font-style: normal;
          font-weight: 900;
          font-size: 30px;
          line-height: 40px;
          /* identical to box height */

          color: #0d1c66;
        }
        .LinkList {
          display: flex;
          flex-wrap: nowrap;
          justify-content: flex-end;
          list-style: none;
        }
        .LinkItem {
          font-size: 16px;
          color: #0d1c66;
          margin: 0 16px;
          padding: 0 16px;
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
        .LinkItem.CTA {
          /*border: 1.5px solid #f69291;
        box-sizing: boder-box;
        border-radius: 4px;*/
          margin: 18px 28px;

          /* position: absolute;
        width: 171px;
        height: 48px;
        left: 1231px;
        top: 24px;*/

          border: 1.5px solid #ffffff;
          box-sizing: border-box;
          border-radius: 4px;
        }
      `}</style>
    </div>
  )
}

export default Header
