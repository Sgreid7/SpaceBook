import React, { useState } from "react"
import Layout from "../components/layout"
import SideNav from "../components/sideNav"
import styled from "styled-components"
import { useSpring } from "react-spring"

const Subscribe = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0, 0, 0) scale(1)`
      : `translate3d(100%, 0, 0) scale(0.6)`,
  })
  return (
    <Layout onClick={() => setNavOpen(!isNavOpen)}>
      <SideNav style={navAnimation} />
      <SubscribeSection>
        <form
          name="subscribe"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="text" name="name" placeholder="Your name" />
          <button>Send</button>
        </form>
      </SubscribeSection>
    </Layout>
  )
}

export default Subscribe

const SubscribeSection = styled.section`
  padding-top: 4rem;
  height: 100vh;
`
