import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    gap: 16rem;
  }

  .wrapper {
    margin-top: 73px;
    margin-bottom: 0;

    h1 {
      display: none;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto 2rem;
      }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
      padding: 4rem;
      border-radius: 8px;

      h1 {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
        font-weight: 500;
      }
    }
  }
`