import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from './deviceBreakpoints';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 1rem;
    width: 100%;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    :root {
      font-size: 0.875rem;
    }

    input {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border-radius: 0.3125rem;
      height: 3rem;
      width: 19.75rem;
      padding: 0.75rem 0.875rem;
      border: none;
      outline: none;
      margin-bottom: 2rem;
    }
  }

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  img {
    display: block;
    max-width: 100%;

    &:hover {
      cursor: pointer;
      filter: contrast(1.1);
      animation: rotate 90s linear infinite;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  input, button, textarea, select, a {
    font-family: inherit;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  #root, #__next {
    isolation: isolate;
  }

  a {
    text-decoration: none;
  }

  h1 {
    font-size: 2.4rem;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  button {
    border-radius: 0.3125rem;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
  }
`;
