import React from 'react'
import { getLayout } from '../../components/default-layout'

const AccountSignup = () => (
  <>
    <div className="signupBackground">
      <div className="startTitle">Sign Up</div>
      <div className="secondaryContent signupPosition1">
        <p> Sign up for an account to begin your matching process.</p>
        <p> You will always be in the drivers seat.</p>
      </div>

      <div className="secondaryTitle signupPosition2">
        {' '}
        What is your primary goal?{' '}
      </div>
      <div className="signuprectangle1">
        {' '}
        <p>Become an egg donor</p>{' '}
      </div>
      <div className="signuprectangle2">
        {' '}
        <p> Find a donor, I am a sponsor </p>{' '}
      </div>
    </div>

    <div id="signupForm">
      <p id="aboutyou"> About you</p>
      <form>
        <label htmlFor="email">
          Email
          <input type="text" id="email" className="formInputBox" name="email" />
        </label>

        <label htmlFor="fname">
          First Name
          <input
            type="text"
            id="fname"
            className="formInputBox"
            name="firstname"
          />
        </label>

        <label htmlFor="lname">
          Last Name
          <input
            type="text"
            id="lname"
            className="formInputBox"
            name="lastname"
          />
        </label>

        <input
          type="submit"
          value="Create Your Account"
          id="createAccountbtn"
        />
      </form>
    </div>

    <style jsx>{`
      .startTitle {
        position: absolute;
        width: 152px;
        height: 56px;
        left: 118px;
        top: 143px;

        font-family: Playfair Display;
        font-style: normal;
        font-weight: 900;
        font-size: 42px;
        line-height: 56px;
        /* identical to box height */

        color: rgba(0, 0, 0, 0.87);
      }

      .secondaryContent {
        font-family: Ruda;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 180%;
        /* identical to box height, or 29px */
        color: rgba(0, 0, 0, 0.6);
      }

      .secondaryTitle {
        font-family: Ruda;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        /* identical to box height */
        color: rgba(0, 0, 0, 0.87);
      }

      #signupForm {
        position: absolute;
        width: 480px;
        top: 450px;
        left: 118px;
      }

      #signupForm label {
        font-family: Ruda;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 14px;
        /* identical to box height, or 87% */

        letter-spacing: 0.01em;

        color: rgba(0, 0, 0, 0.6);
      }

      #createAccountbtn {
        font-family: Oswald;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        /* identical to box height */
        background: #0d1c66;
        box-shadow: 0px 4px 14px rgba(13, 28, 102, 0.38);
        border-radius: 4px;
        color: #ffffff;
        width: 287px;
        height: 57px;
      }

      #aboutyou {
        /*position: absolute;
		width: 671px;
		height: 32px;
		left: 117px;
		top: 445px;*/

        font-family: Ruda;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 180%;
        /* or 32px */
        color: rgba(0, 0, 0, 0.87);
      }

      .formInputBox {
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.24);
        box-sizing: border-box;
        border-radius: 4px;

        width: 480px;
        height: 54px;
        left: 118px;
        top: 520px;
      }

      .signupBackground {
        background: #ffffff;
      }

      .signupPosition1 {
        position: absolute;
        width: 671px;
        height: 29px;
        left: 118px;
        top: 215px;
      }
      .signupPosition2 {
        position: absolute;
        width: 220px;
        height: 22px;
        left: 119px;
        top: 300px;
      }
      .signuprectangle1 {
        position: absolute;
        width: 252px;
        height: 51px;
        left: 118px;
        top: 338px;

        background: #445089;
        border-radius: 4px 0px 0px 4px;
        text-align: center;
        margin: auto;
      }
      .signuprectangle1 p {
        font-family: Ruda;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 180%;
        /* or 25px */
        color: #ffffff;
      }

      .signuprectangle2 {
        position: absolute;
        width: 264px;
        height: 51px;
        left: 369px;
        top: 338px;

        background: #ffffff;
        border: 1.5px solid #c0c0c0;
        box-sizing: border-box;
        border-radius: 0px 4px 4px 0px;
        text-align: center;
        margin: auto;
      }

      .signuprectangle2 p {
        font-family: Ruda;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 180%;
        /* or 25px */
        color: #0d1c66;
      }
    `}</style>
  </>
)
AccountSignup.getLayout = getLayout

export default AccountSignup
