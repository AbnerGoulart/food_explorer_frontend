import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 77px;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  margin: 0;

  position: relative;
  bottom: 0;
  left: 0;
`;
