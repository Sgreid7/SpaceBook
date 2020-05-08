import React, { useState } from "react"
import Layout from "../../components/layout"
import SideNav from "../../components/sideNav"
import devices from "../../utils/devices"
import styled from "styled-components"
import { Link, navigate } from "gatsby"
import { useSpring } from "react-spring"
import SEO from "../../components/seo"
import axios from "axios"

const Create = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const [isNavOpen, setNavOpen] = useState(false)
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0, 0, 0) scale(1)`
      : `translate3d(100%, 0, 0) scale(0.6)`,
  })

  const sendNewUserToApi = async e => {
    e.preventDefault()
    const resp = await axios.post(
      "https://spacebookapi.herokuapp.com/auth/signup",
      {
        name: name,
        password: password,
        email: email,
      }
    )

    if (resp.status === 200) {
      localStorage.setItem("token", resp.data.token)
      // redirect to profile
      setShouldRedirect(true)
    }
  }

  if (shouldRedirect) {
    navigate("/account/profile")
  }

  return (
    <Layout onClick={() => setNavOpen(!isNavOpen)}>
      <SideNav style={navAnimation} />
      <SEO title="Create Account" />
      <AccountSection>
        <form>
          <p>Create Account</p>
          <label htmlFor="username">Please enter your name</label>
          <input
            type="text"
            placeholder="John Doe"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor="password">Please enter your password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <label htmlFor="email">Please enter your email</label>
          <input
            type="email"
            placeholder="JohnDoe@email.com"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button className="create-button" onClick={sendNewUserToApi}>
            Create Account
          </button>
          <Link to="/account/login">
            Already have an account? <span>Sign in here!</span>
          </Link>
        </form>
      </AccountSection>
    </Layout>
  )
}

export default Create

const AccountSection = styled.section`
  height: 100vh;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Rubik", sans-serif;
  background: rgb(0, 0, 139);

  p {
    text-align: center;
    margin: 0.5rem;
    font-style: italic;
    font-size: 3rem;
    color: black;
    -webkit-text-fill-color: white; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #00008b;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 0.3rem solid #ccc;
    height: 65vh;
    width: 80vw;
    padding: 1rem;
    background: whitesmoke;
    box-shadow: 0 0 2rem 0.5rem #000;

    label {
      color: #00008b;
      margin: 0.5rem;
      font-size: 1.2rem;
      text-align: center;
    }

    input {
      padding: 0.5rem;
      border: 0.1rem solid #00008b;
      margin-bottom: 1rem;
      width: 70%;

      :focus {
        outline: none;
        border: 0.1rem solid #8a2be2;
      }
    }
  }

  button {
    margin-top: 1rem;
    font-size: 1.1rem;
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

  .create-button::after {
    transform: scaleX(0);
    transform-origin: left;
  }

  .create-button:hover::after {
    transform: scaleX(1);
    transform-origin: right;
  }

  span {
    border-bottom: 0.15rem solid #00008b;
  }

  a {
    text-decoration: none;
    text-align: center;
    color: #000;
    transition: 0.3s ease;
    margin: 1rem;

    :hover {
      color: #00008b;
      box-shadow: 0 0.2rem 0.2rem #ccc;
    }
  }

  @media (${devices.tablet}) {
    button {
      font-size: 1.5rem;
    }
  }

  @media (${devices.laptop}) {
    p {
      font-size: 4rem;
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

      a {
        margin: 2rem;
      }
    }
  }
`
