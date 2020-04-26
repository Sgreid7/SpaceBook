import React, { useState } from "react"
import SVG from "../images/SVG.svg"
import styled from "styled-components"
import Layout from "../components/layout"
import SideNav from "../components/sideNav"
import { useSpring } from "react-spring"

const PageLoader = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0, 0, 0) scale(1)`
      : `translate3d(100%, 0, 0) scale(0.6)`,
  })

  return (
    <Layout onClick={() => setNavOpen(!isNavOpen)}>
      <SideNav style={navAnimation} />
      <LoadingSection>
        <Image src={SVG} alt="satellite-animated" />
      </LoadingSection>
    </Layout>
  )
}

export default PageLoader

const Image = styled.img`
  height: 10rem;
  width: 10rem;
`

const LoadingSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    138deg,
    rgba(32, 201, 255, 1) 36.7%,
    rgba(0, 8, 187, 1) 84.4%,
    rgba(255, 255, 255, 1) 119.7%
  );
`
