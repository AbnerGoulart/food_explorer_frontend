import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 77px;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  margin-top: auto;

  position: relative;
  bottom: 0;
  left: 0;
  z-index: 100;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 24px 123px;
    justify-content: space-between;

    .wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      width: 1368px;
    }
  }
`;
