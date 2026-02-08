import { createGlobalStyle } from 'styled-components'
import { breakpointMax } from './breakpoints'

// Global CSS Base Styles

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100%;
    line-height: 1.5;
    font-size: 16px;
    font-family: "Montserrat", system-ui;
  }

  a {
    text-decoration: none;
  }

  .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .show-desktop {
    display: block;
    @media ${breakpointMax.md} {
      display: none;
    }
  }

  .show-mobile {
    display: none;
    @media ${breakpointMax.md} {
      display: block;
    }
  }

  .w-full {
    width: 100%;
  }
`
