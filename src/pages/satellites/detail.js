import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { useSpring } from "react-spring"
import styled from "styled-components"
import Layout from "../../components/layout"
import SideNav from "../../components/sideNav"
import devices from "../../utils/devices"
import Cygnus from "../../images/Cygnus.jpg"
import SEO from "../../components/seo"
import moment from "moment"
import axios from "axios"

const Details = ({ location }) => {
  // console.log(location)

  const [satellite, setSatellite] = useState({ StartTime: [], EndTime: [] })
  const [description, setDescription] = useState("")
  const [isNavOpen, setNavOpen] = useState(false)
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0, 0, 0) scale(1)`
      : `translate3d(100%, 0, 0) scale(0.6)`,
  })

  const getSatellites = async resId => {
    const response = await fetch(
      "https://sscweb.sci.gsfc.nasa.gov/WS/sscr/2/spaseObservatories",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    const data = await response.json()

    const satellite = data.Observatory[1].filter(satellite => {
      return satellite.ResourceId === resId
    })
    setSatellite(satellite[0])
  }

  const getSatelliteInfo = async resId => {
    const response = await axios.get(
      `https://cdaweb.gsfc.nasa.gov/registry/hdp/Spase.xql?id=${resId}`
    )
    console.log(response)
    setDescription(response.data.ResourceHeader.Description)
  }

  useEffect(() => {
    if (location && location.state && location.state.satelliteInfo) {
      setSatellite(location.state.satelliteInfo)
      getSatelliteInfo(location.state.satelliteInfo.ResourceId)
    } else {
      const resId = location.search.substring(4).replace(":/", "://")
      getSatelliteInfo(resId)
      getSatellites(resId)
    }
  }, [location])

  return (
    <Layout onClick={() => setNavOpen(!isNavOpen)}>
      <SideNav style={navAnimation} />
      <Content>
        <header>
          <SEO title={satellite.Name} />
          <div>
            <h2>{satellite.Name}</h2>
            <p className="date">Launch Date:</p>
            <p className="day">
              {moment(satellite.StartTime[1]).format("MMMM Do, YYYY")}
            </p>
            <p className="date">End Date:</p>
            <p className="day">
              {moment(satellite.EndTime[1]).format("MMMM Do, YYYY")}
            </p>
          </div>
        </header>
        <div className="description">
          <p>{description}</p>
        </div>
        <Buttons>
          <Link to="/satellites">
            <button>Go back</button>
          </Link>
          {localStorage.getItem("token") ? (
            <Link to={`/satellites/subscribe?id=${satellite.ResourceId}`}>
              <button>Subscribe</button>
            </Link>
          ) : (
            <></>
          )}
        </Buttons>
      </Content>
    </Layout>
  )
}

export default Details

const Content = styled.section`
  margin: 0;
  padding-top: 2rem;
  background-image: url(${Cygnus});
  background-size: cover;
  /* Photo by Jeremy Thomas on Unsplash */

  > header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    > div {
      text-align: center;
    }

    > div .date {
      font-weight: bold;
      font-size: 1.5rem;
      margin: 0.5rem;
      color: #fff;
      text-shadow: 0.07rem 0.07rem 0.07rem #8a2be2;
    }

    > div .day {
      font-style: italic;
      font-size: 1.3rem;
      color: #fff;
      text-shadow: 0.05rem 0.05rem 0.05rem #8a2be2;
    }

    @media (${devices.tablet}) {
      padding-top: 1rem;
      margin-bottom: 4rem;
    }

    @media (${devices.laptop}) {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      padding: 0;

      > div h2 {
        font-size: 6rem;
      }

      > div .date {
        font-size: 2rem;
        text-shadow: 0.1rem 0.1rem 0.1rem #8a2be2;
      }

      > div .day {
        font-size: 1.5rem;
        text-shadow: 0.08rem 0.08rem 0.08rem #8a2be2;
      }
    }
  }

  h2 {
    font-size: 4rem;
    color: #fff;
    text-shadow: 0.15rem 0.15rem 0.15rem #8a2be2;
    font-weight: normal;
    margin: 1rem;
  }

  .description {
    display: flex;
    justify-content: center;
    padding: 2rem 2rem 1rem 2rem;
    font-size: 1.2rem;
    font-style: oblique;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    border: 0.15rem solid #8a2be2;
    border-radius: 0.2rem;
    margin: 2rem;
    text-align: center;
    box-shadow: 0 0.15rem 0.3rem rgba(0, 0, 0, 0.45);
    letter-spacing: 0.02rem;

    > p {
      line-height: 1.5rem;
    }

    @media (${devices.laptop}) {
      margin: 2rem 7rem;
    }
  }

  button {
    background: transparent;
    height: 3rem;
    width: 10rem;
    color: #fff;
    font-size: 1.1rem;
    border: 0.25rem solid #8a2be2;
    transition: 0.4s ease;
    position: relative;
    outline: none;

    ::before,
    ::after {
      content: "";
      position: absolute;
      width: 0.8rem;
      height: 0.25rem;
      background: #000;
      transform: skewX(50deg);
      transition: 0.4s linear;
    }

    ::before {
      top: -4px;
      left: 10%;
    }

    ::after {
      bottom: -4px;
      right: 10%;
    }

    :hover::before {
      left: 80%;
    }

    :hover::after {
      right: 80%;
    }

    :hover {
      cursor: pointer;
      /* color: #000; */
      /* background: #fff; */
      /* text-shadow: 0.05rem 0.05rem 0.05rem #000; */
      /* border: 0.25rem solid #0000ff; */
    }
  }
`

const Image = styled.img`
  display: flex;
  justify-content: center;
  width: 60%;
  height: auto;
  max-width: 720px;
  border-radius: 0.5rem;
  text-align: center;
  /* margin: auto; */
  border: 0.2rem solid #0000ff;

  @media (${devices.tablet}) {
    width: 50%;
  }

  @media (${devices.laptop}) {
    width: 40%;
  }
`
const Buttons = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem 2rem 2rem;

  @media (${devices.laptop}) {
    padding: 0 7rem 2rem 7rem;
  }
`
