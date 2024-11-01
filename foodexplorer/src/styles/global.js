import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from './deviceBreakpoints'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;
    width: 100%;
    height: 100vh;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    :root {
      font-size: 14px;
    }
      
    body {
      width: 100%;
      height: 100vh;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      margin: auto;
    }

    input {
      background-color: ${({theme}) => theme.COLORS.DARK_900};
      border-radius: 5px;
      height: 48px;
      width: 316px;
      padding: 12px 14px;
      border: none;
      outline: none;
      margin-bottom: 32px;
    }
  }

  body {
    font-family: 'Roboto', sans-serif;
    outline: none;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: ${({theme}) => theme.COLORS.DARK_400};
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select, a {
    font-family: inherit;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  #root, #__next {
    isolation: isolate;
  }

  a {
    text-decoration: none;
  }

  h1 {
    font-size: 37px;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  button {
    border-radius: 5px;
    border: none;
    outline: none;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

`;
