import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Link, useStaticQuery } from "gatsby"
// import Satellite from "../templates/satellite"

const Satellites = () => {
  const satellites = useStaticQuery(graphql`
    query getSatellites {
      allSatellite(sort: { order: DESC }) {
        edges {
          node {
            name
            id
            resourceId
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SatelliteSection>
        <input type="search" name="search" placeholder="Search satellites..." />
        <ul>
          {satellites.allSatellite.edges.map(edge => (
            <li key={edge.node.id}>
              <Link to={`/satellites/${edge.node.id}`}>{edge.node.name}</Link>
            </li>
          ))}
        </ul>
      </SatelliteSection>
    </Layout>
  )
}

export default Satellites

const SatelliteSection = styled.section`
  margin-top: 3rem;
  padding-top: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  input {
    margin: 0 auto;
    width: 30vw;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 2rem;
    margin: 2rem 0;
    text-align: center;
    list-style: none;
  }

  li {
  }
`
