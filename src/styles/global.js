import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from './deviceBreakpoints';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    margin: 0;
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

  input, button, textarea, select, a {
    font-family: "Poppins";
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  a {
    text-decoration: none;
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

  h1 {
    font-size: 2rem;
  }


  :root {
    font-size: 1rem;
  }

  input, textarea {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 0.3125rem;
    height: 3rem;
    width: 19.75rem;
    padding: 0.75rem 0.875rem;
    border: none;
    outline: none;
    margin-bottom: 2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    :root {
      font-size: 1.125rem;
    }

    body {
      background-color: ${({ theme }) => theme.COLORS.DARK_400};
    }

    h1 {
      font-size: 3rem;
    }

    input, textarea {
      width: 30rem;
      height: 4rem;
    }
  }
`;
