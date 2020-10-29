import React from 'react'
import cx from 'classnames'
import HeroLayout from '../components/hero-layout'

export default function Home() {
  return (
    <HeroLayout>
      <div className="h-full pt-24">
        <div className="h-full container px-3 mx-auto items-center illustrated">
          <div className="h-full w-full w-4/5 justify-center items-start ">
            <div className="text-white headline">
              We&rsquo;re a women–first
              <br />
              fertility service.
            </div>
            <p className="text-lg pt-12 text-white subheader">
              We&rsquo;re run by WoMen for women. We educate, prioritize, and
              match egg
              <br />
              donors and potential families in a totally transparent,
              step-by-step
              <br />
              process.
            </p>
            <div className="flex pt-6 space-x-4 flex-row w-full">
              <button
                type="button"
                className={cx(
                  'bg-arapawa',
                  'text-white',
                  'items-center',
                  'shadow-md',
                  'rounded-lg',
                  'justify-center',
                  'button',
                  'primary'
                )}
              >
                Got Eggs?
              </button>
              <button
                type="button"
                className={cx(
                  'bg-ballerina',
                  'text-arapawa',
                  'items-center',
                  'shadow-md',
                  'rounded-lg',
                  'justify-center',
                  'bg-opacity-75',
                  'button',
                  'secondary'
                )}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .illustrated {
            background-image: url(/woman-illustration.svg);
            background-repeat: no-repeat;
            background-position: top left 120%;
          }
          .headline {
            font-family: Playfair Display;
            font-style: normal;
            font-weight: 900;
            font-size: 76px;
            line-height: 101px;
          }
          .subheader {
            font-family: Ruda;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 180%;
          }
          .button {
            text-transform: uppercase;
            height: 57px;
            width: 217px;
            font-family: Oswald;
            font-style: normal;
            font-weight: normal;
            font-size: 21px;
            line-height: 31px;
          }
          .button.primary {
          }
          .button.secondary {
            border: 1.5px solid white;
          }
        `}
      </style>
    </HeroLayout>
  )
}
