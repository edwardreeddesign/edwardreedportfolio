import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    /* --clr-white: #fff;
    --clr-med: #2571CB;
    --clr-accent: #B57454;
    --clr-dark: #0B1434; */
    --clr-bg: #f3f6fb;

    /* --clr-white: #fafbfd;
    --clr-med: #003664;
    --clr-accent: #f4d3ca;
    --clr-dark: #0B1434; */

    /* --clr-white: #fafbfd;
    --clr-med: #2a2d2e;
    --clr-accent: #a0beea;
    --clr-dark: #1c1e20; */

    /* --clr-white: #fafbfd;
    --clr-med: #1c95d9;
    --clr-accent: #1c95d9;
    --clr-dark: #1f2548; */

    --clr-white: #f8f8f8;
    --clr-med: #222831;
    --clr-dark: #070707;
    /* --clr-accent: #d6ad61; */
    --clr-accent: #a0beea;

    /* --clr-white: #fff;
    --clr-med: rgb(100,149,237);
    --clr-dark: rgb(25,25,112); */
    /* --clr-accent: rgb(173,216,230); */
    /* --clr-accent: rgba(100,149,237, 0.65);   */

    --font-main: 'Open Sans', sans-serif;
    --font-title: "Montserrat", sans-serif;

    --box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),12.5px 12.5px 10px rgba(0, 0, 0, 0.035),22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),100px 100px 80px rgba(0, 0, 0, 0.07);
}

*,
*::before,
*::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    background-color: var(--clr-dark);
    color: var(--clr-white);
    font-family: var(--font-main);
    padding-top: 5rem;
}

h1, h2, h3, a {
    font-family: var(--font-title);
    letter-spacing: .05rem;
}

h1 {
    font-size: clamp(2rem, 4vw, 2.7rem);
    font-weight: 700;
}

h2 {
    font-size: clamp(1.5, 4vw, 2.8rem);
    font-weight: 500;
}

h3 {
    font-size: clamp(1.3, 3vw, 2.4rem);
    font-weight: 400;
}

h4 {
    font-size: clamp(.6rem, 3vw, .8rem);
    font-weight: 300;
}
h5 {
    font-size: clamp(.7rem, 3vw, 1rem);
    font-weight: 400;
}

p {
    font-size: clamp(.6rem, 4vw, 1.1rem);
    line-height: 135%;
}

span {
    color: var(--clr-accent);
    font-weight: 600;
}

a {
    font-size: clamp(.8rem, 5vw, 1.4rem);
    font-family: var(--font-title);
    color: inherit;
    font-weight: 600;
    text-decoration: none;

}

ul {
    list-style-type: none;

}

`;

export default GlobalStyle;
