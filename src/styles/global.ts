import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html {
    box-sizing: border-box;
}
*, *::before, *::after {
    box-sizing: inherit;
}

body {
    margin: 0;
    padding: 0;
    background-color: hsl(180, 52%, 96%);
    font-family: 'Spartan', sans-serif;
    font-size: 15px;
    font-weight: 500;
}


`;
