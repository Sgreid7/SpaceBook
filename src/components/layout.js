import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import devices from "../utils/devices"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, onClick }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} onClick={onClick} />
      <div>
        <main>{children}</main>
        <FooterSection>
          <p>Additional Resources</p>
          <nav>
            <ul>
              <li>
                <a href="https://www.nasa.gov">NASA</a>
              </li>
              <li>
                <a href="https://www.spacex.com">SpaceX</a>
              </li>
            </ul>
          </nav>
        </FooterSection>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  background: #000;
  margin-top: auto;
  border-top: 0.1rem solid #8a2be2;
  overflow-x: hidden;

  p {
    margin-top: 0.5rem;
    margin-bottom: 0;
    font-size: 1.3rem;
  }

  nav {
    display: flex;
    justify-content: space-between;

    > ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;

      > li {
        margin: 0.5rem 6rem;

        > a {
          text-decoration: none;
          color: #fff;
          font-size: 1.2rem;
          transition: 0.5s ease;
          font-style: italic;
          text-shadow: 0.05rem 0.05rem 0.05rem #0000ff;
        }

        @media (${devices.laptop}) {
          margin: 1rem 10rem;
        }
      }
    }
  }
`
