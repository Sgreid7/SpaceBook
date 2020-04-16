import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import devices from "../utils/devices"
import Satellite from "../images/satellite.jpg"

export default ({ data }) => {
  const satellite = data.satellite
  return (
    <Layout>
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
          <Link to="/">
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
      font-size: 1.2rem;
      margin: 0.5rem;
    }

    > div .day {
      font-style: italic;
      color: #8a2be2;
      text-shadow: 0.05rem 0.05rem 0.05rem #ccc;
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
        font-size: 1.5rem;
      }

      > div .day {
        font-size: 1.2rem;
      }
    }
  }

  h2 {
    font-size: 4rem;
    text-shadow: 0.05rem 0.05rem 0.05rem #8a2be2;
    font-weight: normal;
    margin: 1rem;
  }

  .description {
    display: flex;
    justify-content: center;
    padding: 2rem 2rem 1rem 2rem;
    font-size: 1.1rem;
    font-style: oblique;
    background: whitesmoke;
    border: 0.15rem solid #000;
    border-radius: 0.2rem;
    margin: 2rem;
    text-align: center;
    box-shadow: 0 0.15rem 0.25rem rgba(0, 0, 0, 0.45);
    letter-spacing: 0.02rem;

    > p {
      line-height: 1.5rem;
    }
  }

  button {
    background: transparent;
    height: 3rem;
    width: 10rem;
    color: #8a2be2;
    border: 0.25rem solid #8a2be2;
    transition: 0.4s ease;
    position: relative;

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
      background: #8a2be2;
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
  border: 0.2rem solid #8a2be2;

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
