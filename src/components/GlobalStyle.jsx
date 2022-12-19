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
  }

  button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body {
    width: 100%;
    height: 100vh;
    background-color: ${color.gunmetal[3]}
  }

  .wrapper {
    width: 37.5rem;
    text-align: center;
    margin-inline: auto;
  }

`