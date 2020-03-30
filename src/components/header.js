import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <nav>
      <ul>
        <li>
          <Link to="/">{siteTitle}</Link>
        </li>
        <li>
          <input
            type="search"
            name="search"
            placeholder="Search satellites..."
          />
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
    </nav>
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
  background: rebeccapurple;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;

    > ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;

      > li {
        padding: 0.4rem;
        margin-bottom: 0;
        align-items: center;
        > a {
          text-decoration: none;
          color: #fff;
          align-items: center;
        }
      }
    }
  }
`
