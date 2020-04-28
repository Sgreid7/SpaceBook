import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { useSpring } from "react-spring"
import Layout from "../../components/layout"
import SideNav from "../../components/sideNav"
import SEO from "../../components/seo"
import devices from "../../utils/devices"
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
    const resp = await axios.get(
      "https://spacebookapi.herokuapp.com/api/profile",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )

    setProfile(resp.data)
  }

  const deleteSatellite = async id => {
    const resp = await axios.delete(
      `https://spacebookapi.herokuapp.com/api/subscribedto/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    loadProfile()
  }

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
          <hr />
        </header>
        <SatelliteList>
          {profile.satellites && (
            <ul>
              {profile.satellites.map(satellite => {
                return (
                  <div>
                    <li key={satellite.id}>
                      <h3>{satellite.satelliteId}</h3>
                    </li>
                    <button onClick={() => deleteSatellite(satellite.id)}>
                      X
                    </button>
                  </div>
                )
              })}
            </ul>
          )}
        </SatelliteList>
        <Info>
          <p>
            <span>Email:</span> {profile.email}
          </p>
          <p>
            <span>Account created:</span>{" "}
            {moment(profile.joined).format("MMM Do, YYYY")}
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
  justify-content: center;
  padding-top: 5rem;
  background: whitesmoke;

  header {
    text-align: center;
    font-family: "Rubik", sans-serif;

    h1 {
      font-style: italic;
      font-size: 3rem;
      color: black;
      -webkit-text-fill-color: white;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #00008b;
    }

    h3 {
      color: #00008b;
    }

    hr {
      border: 0;
      height: 1.5px;
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.75),
        rgba(0, 0, 0, 0)
      );
    }
  }
`
const SatelliteList = styled.section`
  height: 100vh;

  ul {
    list-style: none;
    margin: 0;
    width: 100vw;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.1rem solid #8a2be2;
      margin: 1rem;

      button {
        background: #fff;
        color: red;
        height: 2rem;
        outline: none;
        border: 0.1rem solid red;
        transition: 0.3s ease;

        :hover {
          background: red;
          color: #fff;
          cursor: pointer;
        }
      }
    }

    li {
      margin: 1rem;
      width: 100%;

      h3 {
        font-size: 2rem;
        color: #00008b;
        font-family: "Dosis", sans-serif;
      }

      h3:first-letter {
        text-transform: capitalize;
      }
    }
  }

  @media (${devices.laptop}) {
    ul {
      width: 70vw;
    }
  }
`
const Info = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 5rem;
  font-family: "Rubik", sans-serif;

  span {
    font-size: 1.1rem;
    color: #00008b;
  }

  @media (${devices.laptop}) {
    display: flex;
    flex-direction: row;
  }
`
