import React, { useState } from "react"
import Layout from "../../components/layout"
import SideNav from "../../components/sideNav"
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
    const resp = await axios.post("https://localhost:5001/auth/signup", {
      name: name,
      password: password,
      email: email,
    })
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
        <h2>Welcome to SpaceBook!</h2>
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
  align-items: center;

  p {
    text-align: center;
    margin-bottom: 0.5rem;
    font-style: italic;
    font-size: 2rem;
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
    height: 100vh;
    padding: 1rem;
    background: whitesmoke;
    box-shadow: 0 0 1rem 0.25rem rgba(0, 0, 0, 0.3);

    label {
      color: #00008b;
    }

    input {
      padding: 0.5rem;
      border: 0.1rem solid #00008b;

      :focus {
        outline: none;
        border: 0.1rem solid #8a2be2;
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
    width: 100%;
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
    color: #000;
    transition: 0.3s ease;

    :hover {
      color: #00008b;
      box-shadow: 0 0.2rem 0.2rem #ccc;
    }
  }
`
