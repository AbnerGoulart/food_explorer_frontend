import styled from "styled-components";

export const Container = styled.button`
  width: 80vw;
  max-width: 19.75rem;
  height: 3.5rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: 'Poppins', sans-serif;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin: 0;
  }

  .price {
    font-size: 1.125rem;
    font-weight: bold;
  }
  
  .title {
    margin: 0;
    font-size: 1rem;
    font-weight: 300;
  }
`;
