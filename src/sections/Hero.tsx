import styled from "styled-components";
import HeroSplash from "../assets/hero-splash.png";

const StyledSection = styled.section`
  height: 100vh;
  padding-top: var(--navbar-expanded-height);
  padding-left: 0;
  padding-right: 0;
  justify-content: flex-start;

  #hero-splash {
    position: absolute;
    user-select: none;
    -webkit-user-drag: none;
    top: var(--navbar-height);
    background-image: url(${HeroSplash});
    background-size: cover;
    background-position: 50% 75%;
    width: 100%;
    height: calc(100vh - var(--navbar-height));
    filter: brightness(35%);
    z-index: -1;
  }

  #hero-content {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-family: var(--font-serif);
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 20px;
    text-transform: uppercase;
    color: white;

    @media screen and (min-width: 1000px) {
      font-size: 20px;
    }
  }

  h2 {
    color: white;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 80px;
    @media screen and (min-width: 1000px) {
      font-size: 60px;
    }
  }

  h3 {
    font-family: var(--font-serif);
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 80px;
    text-transform: uppercase;
    color: white;

    @media screen and (min-width: 1000px) {
      font-size: 22px;
    }
  }

  a {
    background-color: var(--orange);
    text-decoration: none;
    color: var(--white);
    font-family: var(--font-serif);
    text-transform: uppercase;
    font-size: 20px;
    border: none;
    padding: 30px;
    &:hover {
      cursor: pointer;
      background-color: var(--dark-orange);
    }
    &:active {
      background-color: var(--darker-orange);
    }
  }
`;

const Hero = () => (
  <StyledSection id="home">
    <div id="hero-splash" />
    <div id="hero-content">
      <h1>Get Started Today</h1>
      <h2>Mathematics, Engineering, & Sciences</h2>
      <h3>Greater Philadelphia Area</h3>
      <a href="#pricing">View Pricing</a>
    </div>
  </StyledSection>
);

export default Hero;
