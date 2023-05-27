import { useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import Data from "../data";

const StyledNav = styled.nav`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0px;
  width: 100%;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;

  button {
    border: none;
    background-color: transparent;
  }

  button:hover {
    cursor: pointer;
  }

  #home-img {
    height: 100px;
    user-select: none;
    -webkit-user-drag: none;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    &:not:hover {
      transform: scale(1);
    }
    &.scroll {
      height: 50px;
    }
  }

  #mmt-name {
    display: flex;
    user-select: none;
    color: var(--orange);
    font-family: var(--font-serif);
    font-size: 32px;
    height: 50px;
    line-height: 50px;
    transition: all 0.3s;
    &.scroll {
      font-size: 0px;
      height: 0px;
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0px;
    padding: 0px;
  }

  li {
    margin: 0px 10px;
  }

  #navlinks {
    display: flex;
    align-items: center;
    line-height: 24px;
    margin-top: 36px;
    &.scroll {
      margin-top: 16px;
    }
  }

  .navlink {
    padding: 10px;
  }

  #home-logo {
    line-height: 0.5;
  }

  a {
    text-decoration: none;
    user-select: none;
    color: var(--black);
    &:hover {
      color: var(--dark-orange);
    }
    &.active {
      color: var(--orange);
    }
  }
`;

const NavBar = () => {
  useEffect(() => {
    const navLogo = document.querySelector("#home-img");
    const navName = document.querySelector("#mmt-name");
    const navLinks = document.querySelector("#navlinks");

    const onScroll = () => {
      if (navLogo && navName && navLinks) {
        if (window.scrollY > 20) {
          navLogo.className = "scroll";
          navName.className = "scroll";
          navLinks.className = "scroll";
        } else {
          navLogo.className = "";
          navName.className = "";
          navLinks.className = "";
        }
      }

      Object.keys(Data.tabs).forEach((link) => {
        const section = document.querySelector(`#${link}`);
        if (section) {
          const navLink = document.querySelector(`#navlink-${link}`);
          const dimensions = section.getBoundingClientRect();
          if (navLink) {
            if (dimensions.top <= 1 && dimensions.bottom > 1) {
              navLink.className = "active";
            } else {
              navLink.className = "";
            }
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <StyledNav id="nav">
      <a id="home-logo" href="/#home">
        <img id="home-img" src={Logo} />
      </a>
      <span id="mmt-name">Merchant Math Tutoring</span>
      <div id="navlinks">
        <ul>
          {Object.keys(Data.tabs).map((tabPath) => (
            <li key={tabPath}>
              <a
                className="navlink"
                id={`navlink-${tabPath}`}
                href={`/#${tabPath}`}
              >
                {Data.tabs[tabPath]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </StyledNav>
  );
};

export default NavBar;
