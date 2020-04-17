import React, { useState } from "react"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"
import Satellite from "../images/satellite.jpg"
import Outerspace from "../images/outerspace.jpg"
import SideNav from "../components/sideNav"
import devices from "../utils/devices"
import Layout from "../components/layout"

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
    <Layout onClick={() => setNavOpen(!isNavOpen)}>
      <SideNav style={navAnimation} />
      <Main style={fade}>
        <HeaderSection>
          {/* <SEO title="Home" /> */}
          <h1>SpaceBook</h1>
          <h2>It's time to explore</h2>
          <Link to="/satellites">
            <button>View Satellites</button>
          </Link>
        </HeaderSection>
        <ContentSection>
          <p>
            SpaceBook is a satellite tracker that notifies you via text and/or
            tweet when a satellite you are subscribed to is within your viewing
            area. SpaceBook is also your go to website designed to keep you up
            to date and informed with all things related to satellites.
          </p>
          <Image src={Satellite} alt="Satellite in space" />
        </ContentSection>
      </Main>
    </Layout>
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
  font-family: "Archivo", sans-serif;
  overflow-x: hidden;

  h1 {
    font-size: 5rem;
    margin-bottom: 2.55rem;
    text-shadow: 0.2rem 0.2rem 0.2rem #8a2be2;
    font-style: oblique;
  }

  h2 {
    font-size: 2.5rem;
    font-style: italic;
    margin-bottom: 2.55rem;
    text-shadow: 0.1rem 0.1rem 0.1rem #8a2be2;
  }

  button {
    background: transparent;
    color: #fff;
    width: 14rem;
    height: 5rem;
    font-size: 1.4rem;
    border-radius: 0.5rem;
    border: 0.2rem solid #8a2be2;
    transition: 0.6s;
    letter-spacing: 0.1rem;

    :focus {
      outline: none;
    }

    :hover {
      font-style: italic;
      cursor: pointer;
      color: #8a2be2;
      border: 0.2rem solid #fff;
    }
  }

  @media (${devices.laptopL}) {
    h1 {
      font-size: 6.5rem;
      margin-bottom: 3rem;
      text-shadow: 0.25rem 0.25rem 0.25rem #8a2be2;
    }

    h2 {
      font-size: 4rem;
      margin-bottom: 3rem;
      text-shadow: 0.15rem 0.15rem 0.15rem #8a2be2;
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

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2rem 3rem 2rem;
    font-size: 1.5rem;
    color: #fff;
    text-shadow: 0.05rem 0.05rem 0.05rem #8a2be2;
    line-height: 2rem;
    /* width: 70%; */
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
  display: flex;
  justify-content: center;
  width: 60%;
  height: auto;
  max-width: 720px;
  border-radius: 2rem;
  text-align: center;
  margin: auto;
  border: 0.1rem solid #8a2be2;
`
