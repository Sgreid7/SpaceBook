import React, { useState, useEffect } from "react"
import SideNav from "../components/sideNav"
import Layout from "../components/layout"
import { useSpring } from "react-spring"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Link, graphql } from "gatsby"
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

  const satellitesList = data.allSatellite

  const getSatellites = async () => {
    const response = await axios.get(
      "https://sscweb.sci.gsfc.nasa.gov/WS/sscr/2/spaseObservatories"
    )
    // console.log(response.data.Observatory[1])
    setSatellites(response.data.Observatory[1])
    console.log(satellites)
  }

  useEffect(() => {
    getSatellites()
  }, [])

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
        {/* <ul>
          {satellites
            .filter(satellite => {
              return satellite.name
                .toLowerCase()
                .include(searchFilter.toLowerCase())
            })
            .map(satellite => (
              <li key={satellite.Id}>
                <h2>{satellite.Name}</h2>
                <Link to={`/satellites/${satellite.Id}`}>
                  <button>More Details</button>
                </Link>
              </li>
            ))}
        </ul> */}
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
    padding-top: 2rem;
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
      background: #8a2be2;
      text-shadow: 0.05rem 0.05rem 0.05rem #000;
      border: 0.25rem solid #000;
    }
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
