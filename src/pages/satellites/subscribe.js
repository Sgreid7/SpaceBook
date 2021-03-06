import React, { useState, useEffect } from "react"
import Layout from "../../components/layout"
import SideNav from "../../components/sideNav"
import SEO from "../../components/seo"
import devices from "../../utils/devices"
import styled from "styled-components"
import { Link, navigate } from "gatsby"
import { useSpring } from "react-spring"
import axios from "axios"

const Subscribe = ({ location }) => {
  const [satellite, setSatellite] = useState({ StartTime: [], EndTime: [] })
  const [state, setState] = useState("")
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [receiveNotifications, setReceiveNotifications] = useState(false)
  const [name, setName] = useState("")
  const [isNavOpen, setNavOpen] = useState(false)
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0, 0, 0) scale(1)`
      : `translate3d(100%, 0, 0) scale(0.6)`,
  })

  const resId = location.search.substring(4).replace(":/", "://")

  const getSatellites = async resId => {
    const response = await fetch(
      "https://sscweb.sci.gsfc.nasa.gov/WS/sscr/2/spaseObservatories",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    const data = await response.json()
    const satellite = data.Observatory[1].filter(satellite => {
      return satellite.ResourceId === resId
    })

    setSatellite(satellite[0])
  }

  const getSatelliteInfo = async resId => {
    const response = await axios.get(
      `https://cdaweb.gsfc.nasa.gov/registry/hdp/Spase.xql?id=${resId}`
    )

    setName(response.data.ResourceHeader.ResourceName)
  }

  const saveSatelliteForUser = async () => {
    const resp = axios.post(
      `https://spacebookapi.herokuapp.com/api/subscribedto/${satellite.Id}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )

    if (resp.status === 200) {
      setShouldRedirect(true)
    }
  }

  useEffect(() => {
    const resId = location.search.substring(4).replace(":/", "://")
    getSatellites(resId)
    getSatelliteInfo(resId)
  }, [])

  if (shouldRedirect) {
    navigate("/account/profile")
  }

  return (
    <Layout onClick={() => setNavOpen(!isNavOpen)}>
      <SideNav style={navAnimation} />
      <SEO title="Subscribe" />
      <SubscribeSection>
        <form
          name="subscribe"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="subscribe" />
          <label htmlFor="name">Please enter your name</label>
          <input type="text" name="name" placeholder="John Doe" required />
          <label htmlFor="email">Please enter your email</label>
          <input
            type="email"
            name="email"
            placeholder="email@email.com"
            required
          />
          <label htmlFor="state">Please select your state</label>
          <select
            name="state"
            required
            onChange={e => setState(e.target.value)}
          >
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
            <span>{name}</span>?
          </p>
          <div className="radio-buttons">
            <input
              type="radio"
              name="notification"
              value="yes"
              onChange={e => setReceiveNotifications(true)}
              required
            />
            <label htmlFor="yes">Yes</label>
            <input
              type="radio"
              name="notification"
              value="no"
              onChange={e => setReceiveNotifications(true)}
              required
            />
            <label htmlFor="no">No</label>
          </div>
          <button
            className="send-button"
            onClick={() => {
              saveSatelliteForUser()
            }}
          >
            Send
          </button>
        </form>
      </SubscribeSection>
      <ButtonSection>
        <Link to={`satellites/detail?id=${resId}`}>
          <button>Go back</button>
        </Link>
      </ButtonSection>
    </Layout>
  )
}

export default Subscribe

const SubscribeSection = styled.section`
  padding-top: 4rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 139);

  span {
    font-style: italic;
    font-weight: bold;
    color: #00008b;
    border-bottom: 0.1rem solid #8a2be2;
    font-size: 1.1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0.3rem solid #ccc;
    border-radius: 0.25rem;
    height: 60vh;
    width: 80vw;
    margin-top: 2rem;
    padding: 1rem;
    background: whitesmoke;
    box-shadow: 0 0 2rem 0.5rem #000;

    label {
      margin: 1rem;
      color: #00008b;
    }

    input[type="text"],
    input[type="email"],
    select {
      padding: 0.5rem;
      border: 0.1rem solid #00008b;
      width: 70%;

      :focus {
        outline: none;
        border: 0.1rem solid #8a2be2;
      }
    }

    p {
      color: #00008b;
      margin-top: 1.5rem;
      text-align: center;
    }

    .radio-buttons {
      text-align: center;
      display: flex;
      justify-content: center;

      input[type="radio"] {
        margin: 0 1rem;
      }

      label {
        margin: 0rem;
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
    width: 80%;
    transition: 0.3s ease-in;
    position: relative;
    z-index: 1;
    cursor: pointer;

    :focus {
      outline: none;
    }

    :hover {
      color: #fff;
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

  @media (${devices.tablet}) {
    button {
      width: 80%;
    }
  }

  @media (${devices.laptop}) {
    p {
      font-size: 1.5rem;
    }

    span {
      font-size: 2rem;
    }

    form {
      height: 75vh;
      justify-content: space-around;

      input {
        height: 3rem;
      }

      label {
        font-size: 1.5rem;
      }

      button {
        height: 4rem;
        font-size: 2rem;
      }

      .radio-buttons {
        input[type="radio"] {
          margin: 0 2rem;
        }

        label {
          margin: 0.5rem;
        }
      }
    }
  }

  @media (${devices.laptopL}) {
    form {
      input {
        width: 60%;
      }

      button {
        width: 70%;
      }
    }
  }
`

const ButtonSection = styled.section`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;

  button {
    background: transparent;
    color: #000;
    height: 3rem;
    width: 10rem;
    font-size: 1.1rem;
    border: 0.25rem solid #00008b;
    transition: 0.4s ease;
    position: relative;
    outline: none;

    ::before,
    ::after {
      content: "";
      position: absolute;
      width: 0.8rem;
      height: 0.25rem;
      background: #fff;
      transform: skewX(50deg);
      transition: 0.4s linear;
    }

    ::before {
      top: -4px;
      left: 10%;
    }

    ::after {
      bottom: -4px;
      right: 10%;
    }

    :hover::before {
      left: 80%;
    }

    :hover::after {
      right: 80%;
    }

    :hover {
      cursor: pointer;
      background: #00008b;
      color: #fff;
    }
  }
`
