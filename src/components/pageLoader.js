import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SideNav from "../components/sideNav"
import { useSpring } from "react-spring"

const PageLoader = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0, 0, 0) scale(1)`
      : `translate3d(100%, 0, 0) scale(0.6)`,
  })

  return (
    <Layout onClick={() => setNavOpen(!isNavOpen)}>
      <SideNav style={navAnimation} />
      <LoadingSection>
        <div className="content">
          <div className="planet">
            <div className="ring"></div>
            <div className="cover-ring"></div>
            <div className="spots">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <p>loading</p>
        </div>
      </LoadingSection>
    </Layout>
  )
}

export default PageLoader

const LoadingSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    138deg,
    rgba(32, 201, 255, 1) 36.7%,
    rgba(0, 8, 187, 1) 84.4%,
    rgba(255, 255, 255, 1) 119.7%
  );

  .content {
    width: 300px;
    height: 300px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .planet {
      width: 65%;
      height: 65%;
      background-color: #546c8c;
      border-radius: 100%;
      position: absolute;
      display: flex;
      align-items: center;
      transform-origin: center center;
      box-shadow: inset 2px -10px 0px rgba(0, 0, 0, 0.1);
      animation: planet 5s ease infinite alternate;

      @keyframes planet {
        0% {
          transform: rotate(10deg);
        }

        100% {
          transform: rotate(-10deg);
        }
      }

      /* planet ring */
      .ring {
        position: absolute;
        width: 300px;
        height: 300px;
        border-radius: 100%;
        background-color: #bacbd9;
        display: flex;
        align-items: center;
        justify-content: center;
        transform-origin: 33% center;
        box-shadow: 2px -10px 0px rgba(0, 0, 0, 0.1),
          inset -5px -10px 0px rgba(0, 0, 0, 0.1);
        animation: ring 3s ease infinite;

        @keyframes ring {
          0% {
            transform: rotateX(110deg) rotateZ(0deg) translate(-50px, 5px);
          }

          100% {
            transform: rotateX(110deg) rotateZ(360deg) translate(-50px, 5px);
          }
        }

        /* small ball */
        &:before {
          content: "";
          position: absolute;
          width: 10px;
          height: 30px;
          border-radius: 100%;
          background-color: #7ea1bf;
          z-index: 2;
          left: calc(0px - 5px);
          box-shadow: inset -3px 3px 0px rgba(0, 0, 0, 0.2);
        }

        /* inner ring */
        &:after {
          content: "";
          position: absolute;
          width: 240px;
          height: 240px;
          border-radius: 100%;
          background-color: #7ea1bf;
          box-shadow: inset 2px -10px 0px rgba(0, 0, 0, 0.1);
        }
      }

      /* to cover the back of the ring */
      .cover-ring {
        position: absolute;
        width: 100%;
        height: 50%;
        border-bottom-left-radius: 80%;
        border-bottom-right-radius: 80%;
        border-top-left-radius: 100px;
        border-top-right-radius: 100px;
        transform: translate(0px, -17px);
        background-color: #546c8c;
        z-index: 2;
        box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);
      }

      /* planet spots */
      .spots {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        z-index: 2;

        span {
          width: 30px;
          height: 30px;
          background-color: #3c4359;
          position: absolute;
          border-radius: 100%;
          box-shadow: inset -2px 3px 0px rgba(0, 0, 0, 0.3);
          animation: dots 5s ease infinite alternate;

          @keyframes dots {
            0% {
              box-shadow: inset -3px 3px 0px rgba(0, 0, 0, 0.3);
            }
            100% {
              box-shadow: inset 3px 3px 0px rgba(0, 0, 0, 0.3);
            }
          }

          &:nth-child(1) {
            top: 20px;
            right: 50px;
          }

          &:nth-child(2) {
            top: 40px;
            left: 50px;
            width: 15px;
            height: 15px;
          }

          &:nth-child(3) {
            top: 80px;
            left: 20px;
            width: 25px;
            height: 25px;
          }

          &:nth-child(4) {
            top: 80px;
            left: 90px;
            width: 40px;
            height: 40px;
          }

          &:nth-child(5) {
            top: 160px;
            left: 70px;
            width: 15px;
            height: 15px;
          }

          &:nth-child(6) {
            top: 165px;
            left: 125px;
            width: 10px;
            height: 10px;
          }

          &:nth-child(7) {
            top: 90px;
            left: 150px;
            width: 15px;
            height: 15px;
          }
        }
      }
    }

    p {
      color: #bacbd9;
      font-size: 14px;
      z-index: 2;
      position: absolute;
      bottom: -20px;
      font-family: "Roboto Mono", monospace;
      animation: text 4s ease infinite;
      width: 100px;
      text-align: center;

      @keyframes text {
        0% {
          transform: translateX(-30px);
          letter-spacing: 0px;
          color: #bacbd9;
        }

        25% {
          letter-spacing: 3px;
          color: #7ea1bf;
        }

        50% {
          transform: translateX(30px);
          letter-spacing: 0px;
          color: #bacbd9;
        }

        75% {
          letter-spacing: 3px;
          color: #7ea1bf;
        }

        100% {
          transform: translateX(-30px);
          letter-spacing: 0px;
          color: #bacbd9;
        }
      }
    }
  }
`
