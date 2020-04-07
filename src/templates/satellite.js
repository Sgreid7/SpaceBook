import React from "react"
import styled from "styled-components"

const Satellite = ({
  name,
  personName,
  organizationName,
  startTime,
  endTime,
}) => {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{organizationName}</h4>
      <p>{personName}</p>
      <p>{startTime}</p>
      <p>{endTime}</p>
    </div>
  )
}

export default Satellite
