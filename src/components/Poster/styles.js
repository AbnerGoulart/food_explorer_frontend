import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 90vw;
  max-width: 23.5rem;
  height: 7.5rem;
  border-radius: 0.2rem;
  background: ${({ theme }) => theme.COLORS.GRADIENT_200};
  position: relative;
  display: flex;
  align-items: center;
  margin: 24px auto;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 70rem;
    height: 12.25rem;
  }

  .description {
    font-family: 'Poppins', sans-serif;
    width: 60%;
    position: absolute;
    right: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 1.125rem;
    font-weight: 500;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
     font-size: 2rem;
    }
  }

  h3 {
    font-size: 0.75rem;
    font-weight: 400;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
     font-size: 1rem;
    }
  }

  img {
    width: 50vw;
    max-width: 12rem;
    height: auto;
    position: absolute;
    bottom: 0;
    left: -2rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
     max-width: 18rem;
    }
  }
`;
