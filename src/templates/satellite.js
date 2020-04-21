import React, { useState } from "react"
import { Link } from "gatsby"
import { useSpring } from "react-spring"
import styled from "styled-components"
import Layout from "../components/layout"
import SideNav from "../components/sideNav"
import devices from "../utils/devices"

const SatelliteInfo = ({ satelliteInfo }) => {
  const [isNavOpen, setNavOpen] = useState(false)
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0, 0, 0) scale(1)`
      : `translate3d(100%, 0, 0) scale(0.6)`,
  })

  // const satellite = data.satellite
  return (
    <Content>
      <li key={satelliteInfo.Id}>
        <h2>{satelliteInfo.Name}</h2>
        {/* <Link to={`/satellites/detail?id=${satelliteInfo.ResourceId}`}> */}
        <Link to={`/satellites/${satelliteInfo.Id}`}>
          <button>More Details</button>
        </Link>
      </li>
    </Content>
  )
}

export default SatelliteInfo

// export const query = graphql`
//   query SatelliteQuery($resourceId: String!) {
//     satellite(resourceId: { eq: $resourceId }) {
//       id
//       name
//       nameID
//       resourceId
//       startTime(formatString: "MMM DD, YYYY")
//       endTime(formatString: "MMM DD, YYYY")
//       details {
//         description
//       }
//     }
//   }
// `

const Content = styled.section`
  li {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    background: transparent;
    height: 3rem;
    width: 10rem;
    color: #8a2be2;
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
      background: #fff;
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
      color: #fff;
      background: #8a2be2;
      text-shadow: 0.05rem 0.05rem 0.05rem #000;
      border: 0.25rem solid #000;
    }
  }
`
