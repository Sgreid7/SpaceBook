import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import devices from "../utils/devices"

const Header = ({ siteTitle, onClick }) => {
  return (
    <HeaderSection>
      <li>
        <Link to="/" className="brand">
          {siteTitle}
        </Link>
      </li>
      <button onClick={onClick} className="menu-button">
        Menu
      </button>
    </HeaderSection>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

export const HeaderSection = styled.header`
  display: flex;
  justify-content: space-around;
  background: #000;
  border-bottom: 0.1rem solid #8a2be2;
  position: fixed;
  min-width: 100%;
  padding: 0.5rem 0;
  z-index: 5;

  .menu-button {
    color: #fff;
    text-shadow: 0.2rem 0.2rem 0.2rem #00008b;
    font-weight: bold;
    font-size: 2rem;
    background: transparent;
    border: none;
    position: relative;
    z-index: 15;
    outline: none;
    margin-right: 2rem;
    letter-spacing: 0.05rem;

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
      border-top: 0.15rem solid #0000ff;
      border-right: 0.15rem solid #0000ff;
      transform: translate(-100%, 50%);
    }

    ::after {
      content: "";
      left: 0;
      bottom: 0;
      border-bottom: 0.15rem solid #0000ff;
      border-left: 0.15rem solid #0000ff;
      transform: translate(100%, -50%);
    }

    :hover:before,
    :hover:after {
      transform: translate(0, 0);
      opacity: 1;
    }

    :hover {
      cursor: pointer;
    }
  }

  li {
    padding: 0.4rem;
    margin-bottom: 0;
  }

  .brand {
    font-size: 2rem;
    text-shadow: 0.2rem 0.2rem 0.2rem #00008b;
    transition: 0.5s ease;
    color: #fff;
    text-decoration: none;
    position: relative;
    padding: 0.3rem;

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
      border-top: 0.15rem solid #0000ff;
      border-right: 0.15rem solid #0000ff;
      transform: translate(-100%, 50%);
    }

    ::after {
      content: "";
      left: 0;
      bottom: 0;
      border-bottom: 0.15rem solid #0000ff;
      border-left: 0.15rem solid #0000ff;
      transform: translate(100%, -50%);
    }

    :hover:before,
    :hover:after {
      transform: translate(0, 0);
      opacity: 1;
    }
  }

  @media (${devices.mobileS}) {
    .hide {
      display: none;
    }
  }

  @media (${devices.tablet}) {
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
