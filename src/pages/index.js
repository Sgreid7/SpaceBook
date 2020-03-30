import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>SpaceBook</h1>
    <h2>It's time to explore</h2>
    <button>View Satellites</button>
  </Layout>
)

export default IndexPage
