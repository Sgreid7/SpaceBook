import React, { useState } from "react"
// import { Link } from "gatsby"
import { Router, Link, Location } from "@reach/router"
import { useSpring } from "react-spring"
import styled from "styled-components"
import devices from "../utils/devices"
// import Detail from "../pages/satellites/detail"

const SatelliteInfo = ({ satelliteInfo }) => {
  return (
    // <>
    <Content>
      <li
        key={satelliteInfo.Id}
        // path={`/satellites/detail?id=:${satelliteInfo.ResourceId}`}
      >
        <h2>{satelliteInfo.Name}</h2>
        <Link
          to={`/satellites/detail?id=${satelliteInfo.ResourceId}`}
          state={{ satelliteInfo }}
        >
          <button>More Details</button>
        </Link>
      </li>
    </Content>
    //  <Router>
    //   <Detail path={`/satellites/detail?id=:${satelliteInfo.ResourceId}`} />
    // </Router>
    //  </>
  )
}

export default SatelliteInfo

const Content = styled.section`
  li {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 1.8rem;
    text-align: center;
    font-style: italic;
    margin-bottom: 1rem;
  }

  button {
    background: transparent;
    height: 3rem;
    width: 8rem;
    color: #0000ff;
    border: 0.25rem solid #0000ff;
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
      background: #000;
      text-shadow: 0.05rem 0.05rem 0.05rem #0000ff;
      border: 0.25rem solid #0000ff;
    }
  }

  @media (${devices.laptop}) {
    button {
      width: 10rem;
    }
  }
`
