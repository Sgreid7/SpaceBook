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
        transition: 0.5s ease;

        :hover {
          color: #8a2be2;
        }
      }
    }
  }
`
