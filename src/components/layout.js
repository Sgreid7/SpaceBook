/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Nav from "./header"
import "./layout.css"

const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} />
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
  bottom: 0;
  width: 100%;
  border-top: 0.1rem solid #8a2be2;

  p {
    margin-top: 0.5rem;
    margin-bottom: 0;
    font-style: italic;
    font-size: 1.5rem;
  }

  nav {
    display: flex;
    justify-content: space-between;

    > ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0.1rem;

      > li {
        margin: 0.5rem 10rem;

        > a {
          text-decoration: none;
          color: #fff;
          font-size: 1.2rem;
          transition: 0.5s ease;

          :hover {
            color: #8a2be2;
          }
        }
      }
    }
  }
`
