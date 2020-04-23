import React, { useState } from "react"
import Layout from "../../components/layout"
import SideNav from "../../components/sideNav"
import styled from "styled-components"
import { Link } from "gatsby"
import { useSpring } from "react-spring"
// import devices from "../utils/devices"

// const Subscribe = () => {
//   return <></>
// }

// export default Subscribe

const Subscribe = ({ location }) => {
  // console.log(props)
  const [isNavOpen, setNavOpen] = useState(false)
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0, 0, 0) scale(1)`
      : `translate3d(100%, 0, 0) scale(0.6)`,
  })

  return (
    <Layout onClick={() => setNavOpen(!isNavOpen)}>
      <SideNav style={navAnimation} />
      <SubscribeSection>
        <p>Hi</p>
        {/* <h2>{location.state.satelliteInfo}</h2> */}
        {/* <form
          name="subscribe"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="subscribe" />
          <label htmlFor="name">Please enter your name</label>
          <input type="text" name="name" placeholder="John Doe" />
          <label htmlFor="email">Please enter your email</label>
          <input
            type="email"
            name="email"
            placeholder="email@email.com"
            required
          />
          <label htmlFor="state">Please select your state</label>
          <select name="state">
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          <p>
            Would you like to track and receive notifications for{" "}
            {satellite.name}
          </p>
          <div className="radio-buttons">
            <input type="radio" name="notification" value="yes" />
            <label htmlFor="yes">Yes</label>
            <input type="radio" name="notification" value="no" />
            <label htmlFor="no">No</label>
          </div>
          <button className="send-button">Send</button>
        </form>
        <Link to={`satellites/detail?id=${satelliteInfo.ResourceId}`}>
          <button>Go back</button>
        </Link> */}
      </SubscribeSection>
    </Layout>
  )
}

export default Subscribe

const SubscribeSection = styled.section`
  padding-top: 4rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    border: 0.3rem solid #ccc;
    height: 100vh;
    margin-top: 2rem;
    padding: 1rem;
    background: whitesmoke;
    box-shadow: 0 0 1rem 0.25rem rgba(0, 0, 0, 0.3);

    label {
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
    }

    input[type="text"],
    input[type="email"] {
      padding: 0.5rem;

      :focus {
        outline: none;
        border: 0.1rem solid #00008b;
      }
    }

    p {
      margin-top: 1.5rem;
    }

    select {
      padding: 0.5rem;

      :focus {
        outline: none;
      }
    }

    .radio-buttons {
      text-align: center;

      input[type="radio"] {
        margin: 0 0.5rem;
      }

      label {
        margin: 0.3rem;
      }
    }
  }

  button {
    margin-top: 2rem;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    background: transparent;
    border-radius: 0.2rem;
    border: 0.15rem solid #000;
    color: #000;
    height: 3rem;
    transition: 0.3s ease-in;
    position: relative;
    z-index: 1;
    cursor: pointer;

    :focus {
      outline: none;
    }

    :hover {
      color: #fff;
      border: #fff 0.15rem solid;
    }
  }

  button::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00008b;
    transition: 0.3s ease-in;
    z-index: -1;
  }

  .send-button::after {
    transform: scaleX(0);
    transform-origin: left;
  }

  .send-button:hover::after {
    transform: scaleX(1);
    transform-origin: right;
  }
`
