import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.65rem;
  position: relative;
  width: 300px;
  height: 68px;
  cursor: pointer;
  margin: 0 auto;

  h1 {
    font-size: ${(props) => props.size};
    color: ${({ theme }) => theme.COLORS.LIGTH_100};
    font-family: "Roboto";
  }

  img {
    width: ${(props) => props.size};
  }

  span {
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 300px;
    span {
      position: absolute;
      bottom: 0;
      right: 6px;
    }
  }
`;
