import styled from "styled-components";

export const Container = styled.button`
  height: 1.5rem;
  padding: 0.5rem 0.5rem;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: inherit;
`;
