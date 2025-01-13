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

  box-shadow: 0px 0px 15px 8px rgba(0, 0, 0, 0.75);
  animation: fadeIn 700ms ease 0s 1 normal forwards;

  button {
    padding: 0;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.6);
    }

    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  .header {
    width: 100%;
    height: 4rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    margin: 0 auto;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: baseline;
    gap: 1rem;

    p {
      font-family: 'Roboto';
      font-size: 1.3rem;
      font-weight: 400;
    }
  }

  .content {
    padding: 1rem;
    width: 100%;
    height: 100%;

    button {
      position: relative;
      margin: 1rem 0;
    }

    button::after {
      content: "";
      background-color: #fff;
      position: absolute;
      height: 1px;
      width: 0;
      bottom: 0;
      transition: 500ms;
    }

    button:hover::after {
      width: 100%;
    }

    input {
      display: block;
      width: 100%;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`;
