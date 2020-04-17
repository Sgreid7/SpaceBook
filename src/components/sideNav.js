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
  top: 4.2rem;
  bottom: 0;
  left: 0;
  padding: 4rem;
  background: rgba(0, 0, 0, 1);
  z-index: 10;
  border-left: 0.1rem solid #8a2be2;
  border-bottom: 0.1rem solid #8a2be2;

  ul {
    list-style: none;
    /* display: flex;
    flex-direction: column;
    margin: auto; */
    /* display: block; */
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
    /* border-bottom: 0.25rem solid transparent; */
    /* transition: 0.4s ease border; */
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

  @media (${devices.laptop}) {
    top: 4.2rem;
    padding: 4rem;
    background: rgba(0, 0, 0, 0.5);

    a {
      font-size: 2rem;
    }
  }
`
