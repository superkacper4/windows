import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=VT323&display=swap');
 menu-bar


 master
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'VT323', monospace;
 menu-bar
  }

  html {
    font-size: 62.5%;
  }


    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
  }
 master
  body {
    font-size: 1.6rem;
  }
`;

export default GlobalStyle;
