import styled from "styled-components";

export const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 32px;
  line-height: 140%;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  margin-bottom: 1.5rem;
`;
