import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: "Poppins", sans-serif;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 0;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .price {
    font-size: 1.125rem;
    font-weight: bold;
  }

  .title {
    margin: 0;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }

  svg {
    width: 32px;
  }
`;
