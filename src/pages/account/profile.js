import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { useSpring } from "react-spring"
import Layout from "../../components/layout"
import SideNav from "../../components/sideNav"
import SEO from "../../components/seo"
import styled from "styled-components"
import moment from "moment"
import axios from "axios"

const Profile = () => {
  const [profile, setProfile] = useState({})
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

  // const deleteSatellite = async () => {
  //   const resp = await axios.delete(
  //     `https://localhost:5001/api/subscribedto/${id}`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     }
  //   )
  // }

  useEffect(() => {
    loadProfile()

    if (!localStorage.getItem("token")) {
      navigate("/account/login")
    }
  }, [])

  return (
    <Layout onClick={() => setNavOpen(!isNavOpen)}>
      <SideNav style={navAnimation} />
      <SEO title="Profile" />
      <ProfileSection>
        <header>
          <h1>Hello, {profile.name}</h1>
          <h3>Here are the satellites you are subscribed to:</h3>
        </header>
        <SatelliteList>
          {profile.satellites && (
            <ul>
              {profile.satellites.map(satellite => {
                return (
                  <div>
                    <li>
                      <h3>{satellite.satelliteId}</h3>
                    </li>
                    <button>X</button>
                  </div>
                )
              })}
            </ul>
          )}
        </SatelliteList>
        <Info>
          <p>Email: {profile.email}</p>
          {/* <p>State: {profile.state}</p> */}
          <p>
            Account created: {moment(profile.joined).format("MMM Do, YYYY")}
          </p>
        </Info>
      </ProfileSection>
    </Layout>
  )
}

export default Profile

const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;

  header {
    border-bottom: 0.15rem solid #ccc;

    h1 {
      font-style: italic;
      font-size: 3rem;
      color: black;
      -webkit-text-fill-color: white; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 1.5px;
      -webkit-text-stroke-color: #00008b;
    }
  }
`
const SatelliteList = styled.section`
  ul {
    list-style: none;
    margin: 0;
    width: 100%;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.1rem solid #00008b;
      margin: 1rem;

      button {
        /* padding-top: 0.5rem; */
        background: #fff;
        color: red;
        height: 2rem;
        outline: none;
        border: 0.1rem solid red;
        transition: 0.3s ease;

        :hover {
          background: red;
          color: #fff;
        }
      }
    }

    li {
      /* display: flex;
      justify-content: space-between; */
      margin: 1rem;
      width: 100%;

      h3 {
        font-size: 2rem;
      }

      h3:first-letter {
        text-transform: capitalize;
      }
    }
  }
`
const Info = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 5rem;
`
