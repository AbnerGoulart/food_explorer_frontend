import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 77px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  margin-top: 48px;

`;
