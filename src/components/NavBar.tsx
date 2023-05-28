import { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import Hamburger from "../assets/svg/hamburger-menu.svg";
import Close from "../assets/svg/close.svg";
import Data from "../data";

const StyledNav = styled.nav<{ open: boolean }>`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0px 0px 0px;
  width: 100%;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  background-color: var(--white);

  @media screen and (min-width: 768px) {
    padding: 15px 0px;
  }

  button {
    border: none;
    background-color: transparent;
  }

  button:hover {
    cursor: pointer;
  }

  #hamburger-menu {
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  .mobile-nav-icon {
    width: 60px;
    height: 60px;
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
    padding-bottom: 16px;
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

    @media screen and (min-width: 768px) {
      &.scroll {
        font-size: 0px;
        height: 0px;
        padding-bottom: 8px;
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0px;
    padding: 0px;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }

  li {
    margin: 12px 10px;

    @media screen and (min-width: 768px) {
      margin: 0px 10px;
    }
  }

  #navlinks {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 24px;
    margin-top: 36px;
    &.scroll {
      margin-top: 0px;
    }

    @media screen and (min-width: 768px) {
      &.scroll {
        margin-top: 8px;
      }
    }
  }

  .navlink {
    padding: 10px;
  }

  #home-logo {
    line-height: 0.5;
  }

  a {
    font-size: 24px;
    text-decoration: none;
    user-select: none;
    color: var(--black);
    &:hover {
      color: var(--dark-orange);
    }
    &.active {
      color: var(--orange);
    }

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  #black-overlay {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: var(--black);
    opacity: ${(props) => (props.open ? 0.6 : 0)};
    z-index: 1;
    pointer-events: none;
    transition: opacity 0.3s;
  }
`;

const MenuContainer = styled.div<{ open: boolean }>`
  display: flex;
  position: fixed;
  background-color: var(--white);
  top: 0;
  right: 0;
  height: 100vh;
  width: 60vw;
  padding: 100px 0px;
  transition: all 0.3s;
  transform: translateX(${(props) => (props.open ? 0 : "60vw")});
  z-index: 2;

  @media screen and (min-width: 768px) {
    display: none;
  }

  #close-menu {
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

      Data.tabs.forEach((tab) => {
        const section = document.querySelector(`#${tab.tabLink}`);
        const navLink = document.querySelector(`#navlink-${tab.tabLink}`);
        if (section && navLink) {
          const dimensions = section.getBoundingClientRect();
          if (dimensions.top <= 1 && dimensions.bottom > 1) {
            navLink.className = "navlink active";
          } else {
            navLink.className = "navlink";
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    onResize();

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <StyledNav id="nav" open={mobileMenuOpen}>
      <a id="home-logo" href="/#home">
        <img id="home-img" src={Logo} />
      </a>
      <span id="mmt-name">Merchant Math Tutoring</span>
      {windowWidth >= 768 && (
        <div id="navlinks">
          <ul>
            {Data.tabs.map((tab) => (
              <li key={tab.tabLink}>
                <a
                  className="navlink"
                  id={`navlink-${tab.tabLink}`}
                  href={`/#${tab.tabLink}`}
                >
                  {tab.tabName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button id="hamburger-menu" onClick={() => setMobileMenuOpen(true)}>
        <img className="mobile-nav-icon" src={Hamburger} />
      </button>
      {windowWidth < 768 && <div id="black-overlay" />}
      <MenuContainer open={mobileMenuOpen}>
        <button id="close-menu" onClick={() => setMobileMenuOpen(false)}>
          <img className="mobile-nav-icon" src={Close} />
        </button>
        <div id="navlinks">
          <ul>
            {Data.tabs.map((tab) => (
              <li key={tab.tabLink}>
                <a
                  className="navlink"
                  onClick={() => setMobileMenuOpen(false)}
                  id={`navlink-${tab.tabLink}`}
                  href={`/#${tab.tabLink}`}
                >
                  {tab.tabName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </MenuContainer>
    </StyledNav>
  );
};

export default NavBar;
