import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { PiReceiptLight } from "react-icons/pi";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 114px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  margin: 0 auto 2rem;

  position: relative;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90vw;
  }

  .input {
    display: none;
  }

  .signout {
    display: none;
  }

  .button {
    display: none;
  }

  .receiptContainer {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Estilizações específicas para telas grandes */
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    justify-content: center;

    .wrapper {
      padding: 24px 123px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      width: 1368px;
    }

    .input {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      gap: 2rem;
      width: 521px;
      height: 48px;
      margin-top: 1rem;
    }

    .receiptContainer {
      display: none;
    }

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 216px;
      height: 3rem;
      padding: 12px 14px;
      gap: 2rem;
    }

    .signout {
      display: flex;

      svg {
        height: 2rem;
        width: 2rem;
      }
    }
  }
`;

export const MenuIcon = styled(FiMenu)`
  font-size: 2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  cursor: pointer;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`;

export const ReceiptIcon = styled(PiReceiptLight)`
  font-size: 2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  cursor: pointer;
`;

export const Counter = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 50%;
  background: ${({ theme }) => theme.COLORS.TOMATO_100};

  position: absolute;
  right: -5px;
  top: -5px;

  font-weight: 600;
`;
