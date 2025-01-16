import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 210px;
  height: 100%;
  padding: 24px;
  gap: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  position: relative;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  background: ${({ theme }) => theme.COLORS.DARK_200};

  .action {
    width: fit-content;
    position: absolute;
    z-index: 100;
    right: 10px;

    button {
      display: flex;
      align-items: center;
      justify-content: end;

      svg {
        width: 24px;
        height: 24px;
        z-index: 100;
      }
    }
  }

  img {
    width: 88px;
    height: 88px;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 45px;

    h3 {
      font-family: "Poppins";
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
      text-align: center;
    }
    p {
      display: none;
    }
  }

  .price {
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  .amount {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: center;
    width: 100%;

    .counter {
      display: flex;
      align-items: center;
      width: 100%;

      button {
        width: 100%;
        background-color: transparent;
        display: flex;
        justify-content: center;
      }
    }

    button {
      width: 100%;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    width: 304px;
    height: 100%;
    padding: 24px;
    gap: 15px;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    background: ${({ theme }) => theme.COLORS.DARK_200};

    position: relative;

    .action {
      width: fit-content;
      position: absolute;
      z-index: 100;
      right: 10px;

      button {
        display: flex;
        align-items: center;
        justify-content: end;

        svg {
          width: 24px;
          height: 24px;
          z-index: 100;
        }
      }
    }

    img {
      width: 176px;
      height: 176px;
    }

    .description {
      height: 150px;
      h3 {
        font-size: 24px;
        font-weight: 700;
        line-height: 140%;
      }

      p {
        display: flex;
        font-family: "Roboto";
        font-size: 14px;
        font-weight: 400;
        line-height: 160%;
        text-align: center;
      }
    }

    .price {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      font-size: 32px;
      width: 100%;
      height: 52px;
      line-height: 160%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .amount {
      display: flex;
      flex-direction: row;
      gap: 0.75rem;
      align-items: center;

      button {
        width: 100%;
      }
    }
  }
`;
