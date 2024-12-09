import styled from "styled-components";
import { PiReceiptLight } from "react-icons/pi";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 80vw;
  max-width: 20rem;
  margin: 1.5rem auto 3rem;
  font-family: 'Poppins';

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 60rem;
    justify-content: space-between;
    gap: 2rem;
    padding: 2rem;
    margin: 2rem auto;
  }

  .header {
    width: 100%;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      
    }
  }

  .wrapper {
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      margin-top: 42px;
      gap: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .description {
      @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: 42rem;
      }
    }
  }

  img {
    width: 16.5rem;
    margin: 1rem auto;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      width: 24rem;
      margin: 0;
    }
  }

  h1 {
    font-size: 1.6875rem;
    font-weight: 500;
    margin: 0 auto;
    text-align: center;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 2rem;
      text-align: left;
    }
  }

  p {
    font-size: 1rem;
    text-align: center;
    margin: 1.2rem auto;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 1.2rem;
      text-align: left;
    }
  }

  .tags {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    padding: 0.5rem;
    margin-bottom: 2.2rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      justify-content: flex-start;
      margin-bottom: 0;
    }
  }

  .checkout {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      justify-content: flex-start;
    }

    .counter {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;

      @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        padding: 0;
      }
    }

    .counter button {
      background: transparent;
      width: 1.75rem;
      height: 1.75rem;
      font-size: 1.125rem;
      margin: 0 0.25rem;

      @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: 2rem;
        height: 2rem;
        font-size: 1.5rem;
      }
    }
  }
`;

export const ReceiptIcon = styled(PiReceiptLight)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  cursor: pointer;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 1.5rem;
  }
`;
