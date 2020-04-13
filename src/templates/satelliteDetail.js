import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

export default ({ data }) => {
  const satellite = data.satellite
  return (
    <Content>
      <div>
        <h2>{satellite.name}</h2>
        <p>Launch Date</p>
        <p>{satellite.startTime}</p>
        <p>End Date</p>
        <p>{satellite.endTime}</p>
      </div>
      {/* <div>
        <p>{satellite.details.description}</p>
      </div> */}
    </Content>
  )
}

export const query = graphql`
  query SatelliteQuery($resourceId: String!) {
    satellite(resourceId: { eq: $resourceId }) {
      id
      name
      nameID
      resourceId
      startTime(formatString: "MMM DD, YYYY")
      endTime(formatString: "MMM DD, YYYY")
    }
  }
`

// details {
//   description
// }

const Content = styled.section`
  margin: 0;

  img {
    width: 15vw;
    height: 30vh;
    border-radius: 5%;
    margin-bottom: 0;
  }

  h3 {
    font-style: italic;
    margin-bottom: 1rem;
  }

  button {
    background: transparent;
    height: 3rem;
    width: 10rem;
    color: #8a2be2;
    border: 0.25rem solid #8a2be2;
    transition: 0.4s ease;
    position: relative;

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
      /* transform: translateY(-0.5rem); */
      /* box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.5); */
    }
  }
`
