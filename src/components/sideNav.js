import { Link } from "gatsby"
import React from "react"
import { animated } from "react-spring"
import styled from "styled-components"
import devices from "../utils/devices"

const SideNav = ({ style }) => {
  return (
    <NavWrapper style={style}>
      <nav>
        <ul>
          <li className="hide">
            <Link to="/mostTracked">Most Tracked</Link>
          </li>
          <li className="hide">
            <Link to="/orbit">Satellites on Orbit</Link>
          </li>
          <li className="hide">
            <Link to="/justLaunched">Just Launched</Link>
          </li>
          <li className="hide">
            <Link to="/signup">Sign In</Link>
          </li>
        </ul>
      </nav>
    </NavWrapper>
  )
}

export default SideNav

const NavWrapper = styled(animated.div)`
  position: fixed;
  right: 0;
  top: 3rem;
  bottom: 0;
  padding: 4rem;
  background: rgba(0, 0, 0, .5);
  z-index: 10;

  ul {
    list-style: none;
  }

  a {
    display: block;
    text-align: left;
    font-size: 2rem;
    color: #fff;
    text-decoration: none;
    border-bottom: 0.25rem solid transparent;
    transition: 0.4s ease border;
    
    :hover {
      border-bottom: 0.25rem solid #8a2be2;
    }
  }

  /* @media (${devices.laptop}) {
    display: none;
  } */
`
