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
  body {
    background-color: ${color.gunmetal[3]}
  }
`