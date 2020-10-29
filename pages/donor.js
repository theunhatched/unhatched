import React from 'react'
import cx from 'classnames'
import Layout from '../components/layout'
import ProfileSteps from '../components/profile-steps'
import NameDrop from '../components/name-drop'
import style from './donor.module.css'

const Donor = () => {
  return (
    <Layout>
      <ProfileSteps active="basic" />
      <h1 className="mb-6 mt-12">Complete your donor profile</h1>
      <p className="mb-6 text-black text-opacity-50">
        <NameDrop prefix="Welcome, " suffix="! " />
        Before we can start matching you with the right potential parties,
        we&rsquo;ll need to know more about you.
      </p>
      <p className="mb-12">
        <a href="/">Looking for donors instead?</a>
      </p>
      <h2 className="mt-6 mb-3">About you</h2>
      <p className="mb-6 text-black text-opacity-50">
        Please provide your full legal name below. We&rsquo;ll only share this
        information when you accept a contact request from a recipient.
      </p>
      <form className={style.form}>
        <div className={style.row}>
          <div className="w-1/3 px-3 mb-0">
            <label className={style.label} htmlFor="grid-first-name">
              First Name
              <input
                className={style.input}
                id="grid-first-name"
                type="text"
                placeholder=""
              />
            </label>
          </div>
        </div>
        <div className={style.row}>
          <div className="w-1/3 px-3">
            <label className={style.label} htmlFor="grid-last-name">
              Middle Name
              <input
                className={style.input}
                id="grid-middle-name"
                type="text"
                placeholder=""
              />
            </label>
            <p className="text-gray-600 text-xs italic">
              If no middle name, leave empty
            </p>
          </div>
        </div>
        <div className={style.row}>
          <div className="w-1/3 px-3">
            <label className={style.label} htmlFor="grid-last-name">
              Last Name
              <input
                className={style.input}
                id="grid-last-name"
                type="text"
                placeholder=""
              />
            </label>
          </div>
        </div>
        <h2 className="mt-12 mb-3">Your address</h2>
        <p className="mb-12 text-black text-opacity-50">
          Please provide your mailing address. We&rsquo;ll need this for legal
          reasons, and we won&rsquo;t share this with anyone without your
          consent.
        </p>
        <div className={style.row}>
          <div className="w-1/2 px-3">
            <label className={style.label} htmlFor="grid-address1">
              Street address
              <input
                className={style.input}
                id="grid-address1"
                type="text"
                placeholder=""
              />
            </label>
          </div>
        </div>
        <div className={style.row}>
          <div className="w-1/2 px-3">
            <label className={style.label} htmlFor="grid-address2">
              Street address line 2
              <input
                className={style.input}
                id="grid-address2"
                type="text"
                placeholder=""
              />
            </label>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-1/4 px-3 mb-0">
            <label className={style.label} htmlFor="grid-city">
              City
              <input
                className={style.input}
                id="grid-city"
                type="text"
                placeholder=""
              />
            </label>
          </div>
          <div className="w-1/8 px-3 mb-0">
            <label className={style.label} htmlFor="grid-state">
              State
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </label>
          </div>
          <div className="w-1/8 px-3 mb-0">
            <label className={style.label} htmlFor="grid-zip">
              Zip code
              <input
                className={style.input}
                id="grid-zip"
                type="text"
                placeholder="90210"
              />
            </label>
          </div>
        </div>
        <div className={style.row}>
          <div className="mt-3 px-3">
            <label className={style.label} htmlFor="certify">
              <input
                id="certify"
                type="checkbox"
                className="form-checkbox h-6 w-6"
              />
              <span className="ml-2 text-base">
                I certify that the information I have provided above is true
              </span>
            </label>
          </div>
        </div>
        <div className={style.row}>
          <div className="w-full mt-3 px-3">
            <input
              type="submit"
              className={cx(
                'bg-arapawa',
                'text-white',
                'items-center',
                'shadow-md',
                'rounded-lg',
                'justify-center',
                'button',
                'px-16'
              )}
              value="Save and continue"
            />
          </div>
        </div>
      </form>
      <div className="mb-32" />
      <style jsx>{`
        h2 {
          font-family: Ruda;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 180%;
        }
        .button {
          text-transform: uppercase;
          height: 57px;
          font-family: Oswald;
          font-style: normal;
          font-weight: normal;
          font-size: 21px;
          line-height: 31px;
        }
      `}</style>
    </Layout>
  )
}

export default Donor
