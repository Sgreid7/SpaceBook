import React, { useState } from "react"
import SideNav from "../components/sideNav"
import Layout from "../components/layout"
import { useSpring } from "react-spring"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import devices from "../utils/devices"

const Satellites = ({ data }) => {
  const [searchFilter, setSearchFilter] = useState("")
  const [isNavOpen, setNavOpen] = useState(false)
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0, 0, 0) scale(1)`
      : `translate3d(100%, 0, 0) scale(0.6)`,
  })

  const updateSearchFilter = e => {
    setSearchFilter(e.target.value)
  }

  const satellitesList = data.allSatellite

  return (
    <Layout onClick={() => setNavOpen(!isNavOpen)}>
      <SideNav style={navAnimation} />
      <SatelliteSection>
        <input
          type="search"
          name="search"
          placeholder="Search satellites..."
          onChange={updateSearchFilter}
          // results=5
        />
        <ul>
          {satellitesList.nodes
            .filter(node => {
              return node.name
                .toLowerCase()
                .includes(searchFilter.toLowerCase())
            })
            .map(node => (
              <li key={node.id}>
                <h2>{node.name}</h2>
                <Link to={`/satellites/${node.id}`}>
                  <button>More Details</button>
                </Link>
              </li>
            ))}
        </ul>
      </SatelliteSection>
    </Layout>
  )
}

export const query = graphql`
  query SatellitesPageQuery {
    allSatellite {
      nodes {
        id
        name
        resourceId
      }
    }
  }
`

export default Satellites

const SatelliteSection = styled.section`
  /* margin-top: 3rem; */
  padding-top: 5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  input {
    margin: 0 auto;
    width: 30vw;
  }

  h2 {
    text-align: center;
    font-size: 1.5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 0;
  }

  li {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

  @media (${devices.laptop}) {
    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
