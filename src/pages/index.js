import React, { useState } from "react"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"
import Outerspace from "../images/outerspace.jpg"
import { Router } from "@reach/router"
import SideNav from "../components/sideNav"
import Login from "../pages/account/login"
import Create from "../pages/account/create"
import Astronaut from "../images/Astronaut.jpg"
import devices from "../utils/devices"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0, 0, 0) scale(1)`
      : `translate3d(100%, 0, 0) scale(0.6)`,
  })

  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })

  return (
    <>
      <Layout onClick={() => setNavOpen(!isNavOpen)}>
        <SideNav style={navAnimation} />
        <Main style={fade}>
          <HeaderSection>
            <SEO title="Home" />
            <h1>Spacebook</h1>
            <h2>It's time to explore</h2>
            <Link to="/satellites">
              <button className="satellite-button">View Satellites</button>
            </Link>
          </HeaderSection>
          <ContentSection>
            <p>
              Spacebook is a satellite tracker that notifies you when a
              satellite you are subscribed to is within your viewing area.
              Spacebook is also your go to website designed to keep you up to
              date and informed with all things related to satellites.
            </p>
            <Image src={Astronaut} alt="Astronaut" />
          </ContentSection>
        </Main>
        <Router>
          <Login path="/account/login" />
          <Create path="/account/create" />
        </Router>
      </Layout>
    </>
  )
}

export default IndexPage

const Main = styled(animated.main)`
  background-image: url(${Outerspace});
  /* Photo by NASA on Unsplash */
`

const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #fff;
  font-family: "Rubik", sans-serif;
  overflow-x: hidden;

  h1 {
    font-size: 4rem;
    margin-bottom: 2.55rem;
    text-shadow: 0.2rem 0.2rem 0.2rem #0000ff;
    font-style: oblique;
  }

  h2 {
    font-size: 2rem;
    font-style: italic;
    margin-bottom: 2.55rem;
    text-shadow: 0.1rem 0.1rem 0.1rem #0000ff;
  }

  button {
    background: transparent;
    color: #fff;
    width: 14rem;
    height: 5rem;
    font-size: 1.4rem;
    border-radius: 0.5rem;
    border: 0.2rem solid #00008b;
    transition: 0.3s ease-in;
    letter-spacing: 0.1rem;
    position: relative;
    z-index: 1;

    :focus {
      outline: none;
    }

    :hover {
      cursor: pointer;
      border: 0.2rem solid #fff;
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
    border-radius: 0.4rem;
    z-index: -1;
    transition: 0.3s ease-in;
  }

  .satellite-button::after {
    transform: scale(0);
  }

  .satellite-button:hover::after {
    transform: scale(1);
  }

  @media (${devices.tablet}) {
    h1 {
      font-size: 5rem;
    }

    h2 {
      font-size: 2.5rem;
    }
  }

  @media (${devices.laptopL}) {
    h1 {
      font-size: 6.5rem;
      margin-bottom: 3rem;
      text-shadow: 0.25rem 0.25rem 0.25rem #0000ff;
    }

    h2 {
      font-size: 4rem;
      margin-bottom: 3rem;
      text-shadow: 0.15rem 0.15rem 0.15rem #0000ff;
    }
  }
`
const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-bottom: 3rem;
  overflow-x: hidden;
  font-family: "Rubik", sans-serif;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2rem 3rem 2rem;
    font-size: 1.5rem;
    color: #fff;
    text-shadow: 0.05rem 0.05rem 0.05rem #0000ff;
    line-height: 2rem;
  }

  @media (${devices.laptop}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
    height: 50vh;
  }

  @media (${devices.laptopL}) {
    p {
      font-size: 2rem;
      text-shadow: 0.1rem 0.1rem 0.1rem #8a2be2;
    }
  }
`

const Image = styled.img`
  /* Photo by NASA on unsplash */
  display: flex;
  justify-content: center;
  width: 60%;
  height: auto;
  max-width: 720px;
  border-radius: 1rem;
  text-align: center;
  margin: auto;
  border: 0.1rem solid #00008b;
`
