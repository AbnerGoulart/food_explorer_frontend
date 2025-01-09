import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const BackgroundBlur = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;

  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.5);

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`;

export const Container = styled.div`
  width: 80%;
  min-height: 80vh;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 8px;
  overflow: hidden;
  margin: 0 auto;

  .header {
    width: 100%;
    height: 5rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    margin: 0 auto;
    padding: 1rem;
  }

  .content {
    padding: 1rem;
    width: 100%;
    height: 100%;

    input {
      display: block;
      margin: 1rem auto;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`;
