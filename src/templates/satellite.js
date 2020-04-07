import React from "react"
import styled from "styled-components"

const Satellite = ({ name, src, alt }) => {
  return (
    <Content>
      <img src={src} alt={alt} />
      <h3>{name}</h3>
      <button>More Details</button>
    </Content>
  )
}

export default Satellite

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
    padding: 0.5rem;
    width: 9rem;
    color: #8a2be2;
    border: 0.1rem solid #8a2be2;
    transition: 0.5s ease;

    :hover {
      cursor: pointer;
      color: #fff;
      background: #8a2be2;
      transform: translateY(-0.5rem);
      box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.4);
    }
  }
`

const Image = styled.image`
  width: 30vw;
  height: 40vh;
  border-radius: 2rem;
  text-align: center;
  border: 0.1rem solid #8a2be2;
`
