import { createGlobalStyle } from 'styled-components'
import { breakpointMax } from './breakpoints'

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
    background-color: var(--neutral-50);
    color: var(--gray-600);
  }

  a {
    color: var(--primary-500);
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

  /* AntD Overrides - Minimal */
  .ant-dropdown-menu {
    border: 1px solid var(--gray-600);
  }

  .ant-notification-notice {
    background: var(--white);
  }

  .ant-spin-fullscreen {
    background: rgba(var(--black-rgb), 0.5);
  }
`
