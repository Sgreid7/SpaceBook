import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import devices from "../utils/devices"

const Header = ({ siteTitle, onClick }) => {
  // const [isNavOpen, setNavOpen] = useState(false)
  // const navAnimation = useSpring({
  //   transform: isNavOpen
  //     ? `translate3d(0, 0, 0) scale(1)`
  //     : `translate3d(100%, 0, 0) scale(0.6)`,
  // })

  return (
    // <Nav>
    //   <ul>
    //     <li>
    //       <Link to="/" className="brand">
    //         {siteTitle}
    //       </Link>
    //     </li>
    //     <li className="hide">
    //       <Link>Most Tracked</Link>
    //     </li>
    //     <li className="hide">
    //       <Link>Satellites on Orbit</Link>
    //     </li>
    //     <li className="hide">
    //       <Link>Just Launched</Link>
    //     </li>
    //     <li className="hide">
    //       <Link>Sign In</Link>
    //     </li>
    //   </ul>
    // </Nav>

    <HeaderSection>
      <li>
        <Link to="/" className="brand">
          {siteTitle}
        </Link>
      </li>
      <button onClick={onClick} className="menu-button">
        Menu
      </button>
    </HeaderSection>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

export const HeaderSection = styled.header`
  display: flex;
  justify-content: space-around;
  background: #000;
  border-bottom: 0.1rem solid #8a2be2;
  position: fixed;
  min-width: 100%;
  padding: 0.5rem 0;

  .menu-button {
    color: #fff;
    text-shadow: 0.1rem 0.1rem 0.1rem #8a2be2;
    font-weight: bold;
    font-size: 2rem;
    background: transparent;
    border: none;
    position: relative;
    z-index: 15;
    outline: none;
    margin-right: 2rem;
    letter-spacing: 0.05rem;

    ::before,
    ::after {
      content: "";
      height: 1rem;
      width: 1rem;
      position: absolute;
      transition: all 0.35s ease;
      opacity: 0;
    }

    ::before {
      content: "";
      right: 0;
      top: 0;
      border-top: 0.15rem solid #8a2be2;
      border-right: 0.15rem solid #8400ff;
      transform: translate(-100%, 50%);
    }

    ::after {
      content: "";
      left: 0;
      bottom: 0;
      border-bottom: 0.15rem solid #8400ff;
      border-left: 0.15rem solid #8a2be2;
      transform: translate(100%, -50%);
    }

    :hover:before,
    :hover:after {
      transform: translate(0, 0);
      opacity: 1;
    }

    :hover {
      cursor: pointer;
    }
  }

  li {
    padding: 0.4rem;
    margin-bottom: 0;
  }

  .brand {
    font-size: 2rem;
    text-shadow: 0.1rem 0.1rem 0.1rem #8a2be2;
    transition: 0.5s ease;
    color: #fff;
    text-decoration: none;
    position: relative;
    padding: 0.3rem;

    ::before,
    ::after {
      content: "";
      height: 1rem;
      width: 1rem;
      position: absolute;
      transition: all 0.35s ease;
      opacity: 0;
    }

    ::before {
      content: "";
      right: 0;
      top: 0;
      border-top: 0.15rem solid #8a2be2;
      border-right: 0.15rem solid #8400ff;
      transform: translate(-100%, 50%);
    }

    ::after {
      content: "";
      left: 0;
      bottom: 0;
      border-bottom: 0.15rem solid #8400ff;
      border-left: 0.15rem solid #8a2be2;
      transform: translate(100%, -50%);
    }

    :hover:before,
    :hover:after {
      transform: translate(0, 0);
      opacity: 1;
    }
  }

  @media (${devices.mobileS}) {
    .hide {
      display: none;
    }
  }

  @media (${devices.tablet}) {
    .hide {
      display: inline-block;

      > a {
        font-size: 1rem;
      }
    }
  }

  @media (${devices.laptop}) {
    .hide > a {
      font-size: 1.2rem;
    }
  }
`
