import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Link } from "gatsby"
import Satellite from "../templates/satellite"
import Satellite1 from "../images/satellite.jpg"
import Satellite2 from "../images/satellite2.jpg"
import Satellite3 from "../images/satellite3.jpg"

const Satellites = () => {
  return (
    <Layout>
      <SatelliteSection>
        <ul>
          <li>
            <Satellite
              name="Calipso"
              organizationName="NASA Langley Research Center"
              personName="David M. Winker"
            />
          </li>
          <li>
            <Satellite
              name="Genesis"
              organizationName="Johnson Space Center"
              personName="Fake Name"
            />
          </li>
          <li>
            <Satellite
              name="Genesis"
              organizationName="Johnson Space Center"
              personName="Fake Name"
            />
          </li>
        </ul>
      </SatelliteSection>
    </Layout>
  )
}

export default Satellites

const SatelliteSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 5rem;
  height: 100vh;

  ul {
    display: flex;
    justify-content: center;
  }
`
