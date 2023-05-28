import { createGlobalStyle } from "styled-components";
import Fonts from "./fonts";
import Variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${Fonts}
  ${Variables}

  :root {
    line-height: 1.55;
    box-sizing: border-box;
    scroll-behavior: smooth;
    scrollbar-color: var(--orange);
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    &::-webkit-scrollbar-track {
      background: var(--off-white);
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--orange);
      border-radius: 5px;
    }
  }

  * {
    box-sizing: inherit;
    &::selection {
      background: var(--light-orange);
    }
  }

  body {
    margin: 0;
    background-color: var(--white);
    color: var(--black);
    font-family: var(--font-sans);
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }

  #layout {
    display: flex;
    flex-direction: column;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0px auto;
    min-height: 100vh;
    padding-top: calc(30px + var(--navbar-height));
    padding-left: 3%;
    padding-right: 3%;

    @media screen and (min-width: 768) {
      padding-left: 10%;
      padding-right: 10%;
    }
  }

  h1 {
    font-family: var(--font-serif);
    font-size: 60px;
    margin: 0;
    margin-bottom: 40px;
    color: var(--black);
    line-height: 1.1;
  }

  h2, h3, h4, h5, h6 {
    margin: 0;
    color: var(--black);
    line-height: 1.4;
  }

  hr {
    border: 0px;
    margin: 30px 0px;
    width: 100%;               
    background-color: var(--off-white);
    height: 2px;
  }
`;

export default GlobalStyle;
