import styled, { keyframes } from 'styled-components'

// Loader & Spin Animation
export const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

// Div Button
export const DivButton = styled.button`
  width: 100%;
  display: block;
  box-shadow: none;
  cursor: pointer;

  // ===== User Accessibility =====
  &:focus-visible {
    outline: 2px solid;
  }
`
