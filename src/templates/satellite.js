import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { useSpring } from "react-spring"
import styled from "styled-components"
import Layout from "../components/layout"
import SideNav from "../components/sideNav"
import devices from "../utils/devices"
import Satellite from "../images/satellite.jpg"
import Galaxy from "../images/galaxy.jpg"

export default ({ data }) => {
  const [isNavOpen, setNavOpen] = useState(false)
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0, 0, 0) scale(1)`
      : `translate3d(100%, 0, 0) scale(0.6)`,
  })

  const satellite = data.satellite
  return (
    <Layout onClick={() => setNavOpen(!isNavOpen)}>
      <SideNav style={navAnimation} />
      <Content>
        <header>
          <div>
            <h2>{satellite.name}</h2>
            <p className="date">Launch Date:</p>
            <p className="day">{satellite.startTime}</p>
            <p className="date">End Date:</p>
            <p className="day">{satellite.endTime}</p>
          </div>
          <Image src={Satellite} alt="Satellite in space" />
        </header>
        <div className="description">
          <p>{satellite.details.description}</p>
        </div>
        <Buttons>
          <Link to="/satellites">
            <button>Go back</button>
          </Link>
          <Link to="subscribe">
            <button>Subscribe</button>
          </Link>
        </Buttons>
      </Content>
    </Layout>
  )
}

export const query = graphql`
  query SatelliteQuery($resourceId: String!) {
    satellite(resourceId: { eq: $resourceId }) {
      id
      name
      nameID
      resourceId
      startTime(formatString: "MMM DD, YYYY")
      endTime(formatString: "MMM DD, YYYY")
      details {
        description
      }
    }
  }
`

const Content = styled.section`
  margin: 0;
  padding-top: 2rem;
  background-image: url(${Galaxy});
  background-size: cover;
  /* Photo by Jeremy Thomas on Unsplash */

  > header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    > div {
      text-align: center;
    }

    > div .date {
      font-weight: bold;
      font-size: 1.5rem;
      margin: 0.5rem;
      color: #fff;
      text-shadow: 0.07rem 0.07rem 0.07rem #0000ff;
    }

    > div .day {
      font-style: italic;
      font-size: 1.3rem;
      color: #fff;
      text-shadow: 0.05rem 0.05rem 0.05rem #0000ff;
    }

    @media (${devices.tablet}) {
      padding-top: 1rem;
      margin-bottom: 4rem;
    }

    @media (${devices.laptop}) {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      padding: 0;

      > div h2 {
        font-size: 6rem;
      }

      > div .date {
        font-size: 2rem;
        text-shadow: 0.1rem 0.1rem 0.1rem #0000ff;
      }

      > div .day {
        font-size: 1.5rem;
        text-shadow: 0.08rem 0.08rem 0.08rem #0000ff;
      }
    }
  }

  h2 {
    font-size: 4rem;
    color: #fff;
    text-shadow: 0.15rem 0.15rem 0.15rem #0000ff;
    font-weight: normal;
    margin: 1rem;
  }

  .description {
    display: flex;
    justify-content: center;
    padding: 2rem 2rem 1rem 2rem;
    font-size: 1.2rem;
    font-style: oblique;
    /* background: #fffafa; */
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    border: 0.15rem solid #00008b;
    border-radius: 0.2rem;
    margin: 2rem;
    text-align: center;
    box-shadow: 0 0.15rem 0.3rem rgba(0, 0, 0, 0.45);
    letter-spacing: 0.02rem;

    > p {
      line-height: 1.5rem;
    }
  }

  button {
    background: transparent;
    height: 3rem;
    width: 10rem;
    color: #fff;
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
      color: #fff;
      background: #00008b;
      text-shadow: 0.05rem 0.05rem 0.05rem #000;
      border: 0.25rem solid #000;
    }
  }
`

const Image = styled.img`
  display: flex;
  justify-content: center;
  width: 60%;
  height: auto;
  max-width: 720px;
  border-radius: 0.5rem;
  text-align: center;
  /* margin: auto; */
  border: 0.2rem solid #0000ff;

  @media (${devices.tablet}) {
    width: 50%;
  }

  @media (${devices.laptop}) {
    width: 40%;
  }
`
const Buttons = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem 2rem 2rem;
`
