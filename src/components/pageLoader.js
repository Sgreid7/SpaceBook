import React from "react"
import SVG from "../images/SVG.svg"
import styled from "styled-components"

const PageLoader = () => {
  return (
    <LoadingSection>
      <Image src={SVG} alt="satellite-animated" />
    </LoadingSection>
  )
}

export default PageLoader

const Image = styled.img`
  height: 350px;
  width: 350px;
`

const LoadingSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
