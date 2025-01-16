import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  margin-bottom: 1.5rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 32px;
  }
`;
