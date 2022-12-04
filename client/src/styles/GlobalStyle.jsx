import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  };

  button {
    font-size: 1rem;
  }

  button, input {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  };
`;

export default GlobalStyle;