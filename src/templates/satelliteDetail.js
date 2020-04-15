import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Satellite from "../images/satellite.jpg"

export default ({ data }) => {
  const satellite = data.satellite
  return (
    <Layout>
      <Content>
        <header>
          <h2>{satellite.name}</h2>
          <p className="date">Launch Date:</p>
          <p>{satellite.startTime}</p>
          <p className="date">End Date:</p>
          <p>{satellite.endTime}</p>
          <Image src={Satellite} alt="Satellite in space" />
        </header>
        <div>
          <p>{satellite.details.description}</p>
        </div>
        <div>
          <Link to="/">
            <button>Go back</button>
          </Link>
        </div>
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

  > header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > .date {
      margin-bottom: 0;
    }
  }

  > h2 {
    font-style: italic;
    margin: 1rem;
  }

  > button {
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
  border-radius: 2rem;
  text-align: center;
  margin: auto;
  border: 0.1rem solid #8a2be2;
`
