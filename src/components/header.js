import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import devices from "../utils/devices"

const Header = ({ siteTitle }) => (
  <Nav>
    <ul>
      <li>
        <Link to="/" className="brand">
          {siteTitle}
        </Link>
      </li>
      <li className="hide">
        <Link>Most Tracked</Link>
      </li>
      <li className="hide">
        <Link>Satellites on Orbit</Link>
      </li>
      <li className="hide">
        <Link>Just Launched</Link>
      </li>
      <li className="hide">
        <Link>Sign In</Link>
      </li>
    </ul>
  </Nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

export const Nav = styled.nav`
  display: flex;
  background: #000;
  border-bottom: 0.1rem solid #8a2be2;
  position: fixed;
  min-width: 100%;

  .brand {
    font-style: oblique;
    font-size: 1.5rem;
    text-shadow: 0.1rem 0.1rem 0.1rem #8a2be2;
    transition: 0.5s ease;

    /* :hover {
      color: #8a2be2;
      text-shadow: 0.05rem 0.05rem 0.05rem #fff;
    } */
  }

  > ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0.5rem;

    > li {
      padding: 0.4rem;
      margin-bottom: 0;

      > a {
        text-decoration: none;
        align-items: center;
        padding: 0 1rem;
        color: #fff;
        font-family: "Archivo", sans-serif;
        font-size: 1rem;
        /* transition: 0.5s ease; */
        position: relative;

        ::before,
        ::after {
          content: "";
          height: 1rem;
          width: 1rem;
          position: absolute;
          transition: all 0.35s ease;
          opacity: 0;
        }

        ::before {
          content: "";
          right: 0;
          top: 0;
          border-top: 0.15rem solid #8a2be2;
          border-right: 0.15rem solid #8400ff;
          transform: translate(-100%, 50%);
        }

        ::after {
          content: "";
          left: 0;
          bottom: 0;
          border-bottom: 0.15rem solid #8400ff;
          border-left: 0.15rem solid #8a2be2;
          transform: translate(100%, -50%);
        }

        :hover:before,
        :hover:after {
          transform: translate(0, 0);
          opacity: 1;
        }

        /* :hover {
          color: #8a2be2;
        } */
      }
    }
  }

  @media (${devices.mobileS}) {
    .hide {
      display: none;
    }
  }

  @media (${devices.tablet}) {
    justify-content: center;

    .hide {
      display: inline-block;

      > a {
        font-size: 1rem;
      }
    }
  }

  @media (${devices.laptop}) {
    .hide > a {
      font-size: 1.2rem;
    }
  }
`
