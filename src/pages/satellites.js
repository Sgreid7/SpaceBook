import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Link } from "gatsby"

const satellites = () => {
  return (
    <Layout>
      <Section>
        <h1>SATELLITES PAGE</h1>
      </Section>
    </Layout>
  )
}

export default satellites

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  height: 100vh;
`
