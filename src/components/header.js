import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Nav>
      <ul>
        <li>
          <Link to="/" className="brand">
            {siteTitle}
          </Link>
        </li>
        <li>
          <Link>Most Tracked</Link>
        </li>
        <li>
          <Link>Satellites on Orbit</Link>
        </li>
        <li>
          <Link>Just Launched</Link>
        </li>
        <li>
          <Link>Sign In</Link>
        </li>
      </ul>
    </Nav>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const HeaderWrapper = styled.section`
  background: transparent;
`
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  border-bottom: 0.1rem solid #8a2be2;
  position: fixed;
  top: 0;
  min-width: 100%;

  .brand {
    font-style: oblique;
    font-size: 1.4rem;
    text-shadow: 0.1rem 0.1rem 0.1rem #8a2be2;
    transition: 0.5s ease;

    :hover {
      color: #8a2be2;
      text-shadow: 0.05rem 0.05rem 0.05rem #fff;
    }
  }

  > ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0.5rem;

    > li {
      padding: 0.4rem;
      margin-bottom: 0;
      align-items: center;

      > a {
        text-decoration: none;
        align-items: center;
        padding: 0 2rem;
        color: #fff;
        font-family: "Archivo", sans-serif;
        font-size: 1.2rem;
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
          border-top: 0.15rem solid rgb(34, 240, 255);
          border-right: 0.15rem solid rgb(34, 210, 255);
          transform: translate(-100%, 50%);
        }

        ::after {
          content: "";
          left: 0;
          bottom: 0;
          border-bottom: 0.15rem solid rgb(34, 210, 255);
          border-left: 0.15rem solid rgb(34, 240, 255);
          transform: translate(100%, -50%);
        }

        :hover:before,
        :hover:after {
          transform: translate(0, 0);
          opacity: 1;
        }

        :hover {
          color: #8a2be2;
        }
      }
    }
  }
`
