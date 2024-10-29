// src/components/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: background-color 0.3s, color 0.3s;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
