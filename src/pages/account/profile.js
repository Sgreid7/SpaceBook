import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { useSpring } from "react-spring"
import Layout from "../../components/layout"
import SideNav from "../../components/sideNav"
import styled from "styled-components"
import moment from "moment"
import axios from "axios"

const Profile = () => {
  const [profile, setProfile] = useState({})
  const [satellites, setSatellites] = useState([])
  const [isNavOpen, setNavOpen] = useState(false)
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0, 0, 0) scale(1)`
      : `translate3d(100%, 0, 0) scale(0.6)`,
  })

  const loadProfile = async () => {
    const resp = await axios.get("https://localhost:5001/api/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })

    // console.log(resp.data)
    setProfile(resp.data)
  }

  // const getUsersSatellites = async userId => {
  //   const resp = await axios.get(
  //     `https://localhost:5001/api/subscribedto/user/${userId}`
  //   )
  //   console.log(resp.data)
  //   setSatellites(resp.data)
  // }

  useEffect(() => {
    loadProfile()
    // getUsersSatellites()
    if (!localStorage.getItem("token")) {
      navigate("/account/login")
    }
  }, [])

  return (
    <Layout onClick={() => setNavOpen(!isNavOpen)}>
      <SideNav style={navAnimation} />
      <ProfileSection>
        <h1>Hello, {profile.name}</h1>
        <h3>Here are the satellites you are subscribed to:</h3>
        {/* <p>Email: {profile.email}</p>
        <p>State: {profile.state}</p>
        <p>Account created: {moment(profile.joined).format("MMM Do, YYYY")}</p> */}
      </ProfileSection>
    </Layout>
  )
}

export default Profile

const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  align-items: center;
  height: 100vh;
  padding-top: 5rem;
`
