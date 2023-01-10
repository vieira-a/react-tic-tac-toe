import { createGlobalStyle } from "styled-components";
import { color, gunmetal } from "./UI/Colors";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  :root {
    font-size: 62.5%;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  body {
    width: 100%;
    height: 100vh;
    background-color: ${color.gunmetal[3]}
  }

  .wrapper {
    padding-top: 4.8rem;
    width: 37.5rem;
    text-align: center;
    margin-inline: auto;
    padding-inline: 2.4rem;
  }

`