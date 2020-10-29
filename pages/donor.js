import React from 'react'
import Layout from '../components/layout'
import ProfileSteps from '../components/profile-steps'
import style from './donor.module.css'

const Donor = () => {
  const name = 'Lydia'

  return (
    <Layout>
      <ProfileSteps active="basic" />
      <h1>Complete your donor profile</h1>
      <p>
        Welcome, {name}! Welcome, Lydia! Before we can start matching you with
        the right potential parties, we&rsquo;ll need to know more about you.
      </p>
      <p>
        <a href="/">Looking for donors instead?</a>
      </p>
      <h2>About you</h2>
      <p>
        Please provide your full legal name below. We&rsquo;ll only share this
        information when you accept a contact request from a recipient.
      </p>
      <form className={style.form}>
        <div className={style.row}>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className={style.label} htmlFor="grid-first-name">
              First Name
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </label>
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className={style.label} htmlFor="grid-last-name">
              Last Name
              <input
                className={style.input}
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </label>
          </div>
        </div>
        <div className={style.row}>
          <div className="w-full px-3">
            <label className={style.label} htmlFor="grid-password">
              Password
              <input
                className={style.input}
                id="grid-password"
                type="password"
                placeholder="******************"
              />
            </label>
            <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you&rsquo;d like
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className={style.label} htmlFor="grid-city">
              City
              <input
                className={style.input}
                id="grid-city"
                type="text"
                placeholder="Albuquerque"
              />
            </label>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
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
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className={style.label} htmlFor="grid-zip">
              Zip
              <input
                className={style.input}
                id="grid-zip"
                type="text"
                placeholder="90210"
              />
            </label>
          </div>
        </div>
      </form>
    </Layout>
  )
}

export default Donor
