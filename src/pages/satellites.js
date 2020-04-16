import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Link, useStaticQuery } from "gatsby"

const Satellites = () => {
  const satellites = useStaticQuery(graphql`
    query getSatellites {
      allSatellite(sort: { order: DESC }) {
        edges {
          node {
            name
            id
            resourceId
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SatelliteSection>
        <input type="search" name="search" placeholder="Search satellites..." />
        <ul>
          {satellites.allSatellite.edges.map(edge => (
            <li key={edge.node.id}>
              <h2>{edge.node.name}</h2>
              <Link to={`/satellites/${edge.node.id}`}>
                <button>More Details</button>
              </Link>
            </li>
          ))}
        </ul>
      </SatelliteSection>
    </Layout>
  )
}

export default Satellites

const SatelliteSection = styled.section`
  margin-top: 3rem;
  padding-top: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  input {
    margin: 0 auto;
    width: 30vw;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 2rem;
    margin: 2rem 0;
    text-align: center;
    list-style: none;
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
