import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif, serif;
  }

  body {
    width: 100vw;
    height: 100vh;
    text-align: center;
  }
`;

export default GlobalStyle;
