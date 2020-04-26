import React, { useState } from "react"
import Layout from "../../components/layout"
import SideNav from "../../components/sideNav"
import styled from "styled-components"
import { Link } from "gatsby"
import { useSpring } from "react-spring"
import SEO from "../../components/seo"
import devices from "../../utils/devices"
import axios from "axios"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const [token, setToken] = useState("")

  const [isNavOpen, setNavOpen] = useState(false)
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0, 0, 0) scale(1)`
      : `translate3d(100%, 0, 0) scale(0.6)`,
  })

  const loginUser = async e => {
    e.preventDefault()
    const resp = await axios.post("https://localhost:5001/auth/login", {
      email: loginEmail,
      password: loginPassword,
    })
    // console.log(resp.data)
    setToken(resp.data.token)
  }

  const getSecretInformation = async () => {
    const resp = await axios.get("https://localhost:5001/api/secret", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
  }

  return (
    <Layout onClick={() => setNavOpen(!isNavOpen)}>
      <SideNav style={navAnimation} />
      <SEO title="Login" />
      <AccountSection>
        <h2>Welcome back to SpaceBook!</h2>
        <form>
          <p>Sign In</p>
          <label htmlFor="username">Please enter your email</label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={loginEmail}
            onChange={e => setLoginEmail(e.target.value)}
          />
          <label htmlFor="password">Please enter your password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={loginPassword}
            onChange={e => setLoginPassword(e.target.value)}
          />
          <button className="sign-in-button" onClick={loginUser}>
            Sign In
          </button>
          <Link to="/account/create">
            Don't have an account? <span>Create one here!</span>
          </Link>
        </form>
      </AccountSection>
    </Layout>
  )
}

export default Login

const AccountSection = styled.section`
  height: 100vh;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-align: center;
    margin: 0;
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
      font-size: 1.2rem;
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

  .sign-in-button::after {
    transform: scaleX(0);
    transform-origin: left;
  }

  .sign-in-button:hover::after {
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
