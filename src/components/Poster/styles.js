import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 90vw;
  height: 7.5rem;
  border-radius: 0.2rem;
  background: ${({ theme }) => theme.COLORS.GRADIENT_200};
  position: relative;
  display: flex;
  align-items: center;
  margin: 44px auto;
  animation: posterFadeIn 1s ease-in 0s 1 normal forwards;

  @keyframes posterFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    width: 90vw;
    max-width: 1120px;
    height: 260px;
    margin: 164px auto 24px;
  }

  .description {
    font-family: 'Poppins', sans-serif;
    width: 50%;
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 14px;
    font-weight: 500;
    font-family: 'Poppins';

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
     font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 10px;
    font-weight: 400;
    font-family: 'Roboto';

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
     font-size: 1rem;
    }
  }

  img {
    width: auto;
    height: 110%;
    position: absolute;
    bottom: 0;
    left: -2rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
     height: 140%;
     left: -7rem;
    }
  }
`;
