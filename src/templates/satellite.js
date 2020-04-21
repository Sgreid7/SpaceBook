import React, { useState } from "react"
// import { Link } from "gatsby"
import { Router, Link, Location } from "@reach/router"
import { useSpring } from "react-spring"
import styled from "styled-components"
import Detail from "../pages/satellites/detail"

const SatelliteInfo = ({ satelliteInfo }) => {
  return (
    <>
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
      <Router>
        <Detail path={`/satellites/detail?id=:${satelliteInfo.ResourceId}`} />
      </Router>
    </>
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
`
