import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  body, input, textarea, select, button {
    font-family: Montserrat, Arial, sans-serif;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0px;
  }
  a {
    text-decoration: none;
  }
  #app, #root {
    height: 100%;
    position: relative;
  }
`;
