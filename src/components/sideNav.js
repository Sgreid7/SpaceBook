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
          <li>
            <Link to="/mostTracked">Most Tracked</Link>
          </li>
          <li>
            <Link to="/orbit">Satellites on Orbit</Link>
          </li>
          <li>
            <Link to="/justLaunched">Just Launched</Link>
          </li>
          <li>
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
  top: 4.2rem;
  bottom: 0;
  left: 0;
  padding: 4rem;
  background: rgba(0, 0, 0, 1);
  z-index: 10;
  border-bottom: 0.13rem solid #8a2be2;

  ul {
    list-style: none;
    margin: auto;
    position: relative;
  }

  li {
    display: block;
  }

  a {
    position: relative;
    text-align: left;
    font-size: 2rem;
    color: #fff;
    text-decoration: none;
    padding-bottom: 0.3rem;
    text-shadow: 0.1rem 0.1rem 0.1rem #0000ff;
  }
  a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.15rem;
    background: #8a2be2;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-in;
  }

  a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  @media (${devices.tablet}) {
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (${devices.laptop}) {
    right: 0;
    bottom: 0;
    left: 71%;
    padding: 3.5rem;
    background: rgba(0, 0, 0, 0.8);
    border-left: 0.1rem solid #8a2be2;

    ul {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    a {
      font-size: 1.7rem;
    }
  }
`
