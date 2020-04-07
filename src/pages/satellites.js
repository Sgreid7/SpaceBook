import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Link } from "gatsby"
import Satellite from "../templates/satellite"
import Satellite1 from "../images/satellite.jpg"
import Satellite2 from "../images/satellite2.jpg"
import Satellite3 from "../images/satellite3.jpg"
import CityView from "../images/cityview.jpg"

const Satellites = () => {
  return (
    <Layout>
      <SatelliteSection>
        <input type="search" name="search" placeholder="Search satellites..." />
        <ul>
          <li>
            <Satellite
              name="Calipso"
              src={Satellite1}
              alt="Satellite in space"
            />
          </li>
          <li>
            <Satellite
              name="Genesis"
              src={Satellite2}
              alt="Black & white satellite"
            />
          </li>
          <li>
            <Satellite
              name="Spitzer"
              src={Satellite3}
              alt="Satellite in the sunset"
            />
          </li>
          <li>
            <Satellite
              name="Calipso"
              src={Satellite1}
              alt="Satellite in space"
            />
          </li>
          <li>
            <Satellite
              name="Genesis"
              src={Satellite2}
              alt="Black & white satellite"
            />
          </li>
          <li>
            <Satellite
              name="Spitzer"
              src={Satellite3}
              alt="Satellite in the sunset"
            />
          </li>
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
