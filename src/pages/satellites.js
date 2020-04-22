import React, { useState, useEffect } from "react"
import SideNav from "../components/sideNav"
import Layout from "../components/layout"
import { useSpring } from "react-spring"
import styled from "styled-components"
import Satellite from "../templates/satellite"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Router, Link, Location } from "@reach/router"
// import { Link, graphql } from "gatsby"
import devices from "../utils/devices"
import axios from "axios"

export default ({ data }) => {
  const [satellites, setSatellites] = useState([])
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

  const getSatellites = async () => {
    const response = await fetch(
      "https://sscweb.sci.gsfc.nasa.gov/WS/sscr/2/spaseObservatories",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    const data = await response.json()
    // console.log(data.Observatory[1])
    setSatellites(data.Observatory[1])
  }

  useEffect(() => {
    getSatellites()
  }, [])

  console.log(satellites)

  return (
    <Layout onClick={() => setNavOpen(!isNavOpen)}>
      <SideNav style={navAnimation} />
      <SatelliteSection>
        <div className="search-box">
          <input
            type="search"
            name="search"
            placeholder="Search satellites..."
            onChange={updateSearchFilter}
          />
          <a className="search-btn" href="#">
            <FontAwesomeIcon icon={faSearch} />
          </a>
        </div>
        <ul>
          {satellites
            .filter(satellite => {
              return satellite.Name.toLowerCase().includes(
                searchFilter.toLowerCase()
              )
            })
            .map(satellite => {
              return <Satellite key={satellite.Id} satelliteInfo={satellite} />
            })}
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

// export default Satellites

const SatelliteSection = styled.section`
  /* margin-top: 3rem; */
  padding-top: 5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .search-box {
    position: absolute;
    background: #00008b;
    height: 2.5rem;
    border-radius: 2.5rem;
    padding: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0.1rem 0.1rem #8a2be2;

    :hover > input {
      width: 15rem;
      padding: 0 0.35rem;
    }

    :hover > .search-btn {
      background: #fff;
      color: #00008b;
    }
  }

  .search-btn {
    color: #fff;
    float: right;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: #00008b;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease;
  }

  input {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: #fff;
    transition: 0.4s ease;
    width: 0rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding-top: 2rem;
  }

  @media (${devices.tablet}) {
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (${devices.laptop}) {
    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (${devices.laptopL}) {
    ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
