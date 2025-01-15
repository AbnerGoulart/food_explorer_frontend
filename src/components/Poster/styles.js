import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 23.5rem;
  height: 7.5rem;
  border-radius: 0.2rem;
  background: ${({ theme }) => theme.COLORS.GRADIENT_200};
  position: relative;
  display: flex;
  align-items: center;
  margin: 44px auto;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 1120px;
    height: 260px;
    margin: 164px auto 24px;
    animation: fadeIn 2s ease-in 0s 1 normal forwards;
  }

  .description {
    font-family: 'Poppins', sans-serif;
    width: 50%;
    position: absolute;
    right: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 18px;
    font-weight: 500;
    font-family: 'Poppins';

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
     font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 12px;
    font-weight: 400;
    font-family: 'Roboto';

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
     font-size: 1rem;
    }
  }

  img {
    width: 50vw;
    height: auto;
    position: absolute;
    bottom: 0;
    left: -3.5rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
     max-width: 33rem;
     left: -7rem;
    }
  }
`;
