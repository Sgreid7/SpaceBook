import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { useSpring } from "react-spring"
import Layout from "../../components/layout"
import SideNav from "../../components/sideNav"
import styled from "styled-components"
import axios from "axios"

const Profile = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0, 0, 0) scale(1)`
      : `translate3d(100%, 0, 0) scale(0.6)`,
  })

  if (!localStorage.getItem("token")) {
    navigate("/account/login")
  }

  return (
    <Layout onClick={() => setNavOpen(!isNavOpen)}>
      <SideNav style={navAnimation} />
      <ProfileSection>
        <h1>MY PROFILE!!!</h1>
      </ProfileSection>
    </Layout>
  )
}

export default Profile

const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 5rem;
`
