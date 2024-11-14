import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 210px;
  height: 292px;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.COLORS.DARK_300};
  background: ${({theme}) => theme.COLORS.DARK_200};

  cursor: pointer;

  img {
    width: 88px;
    height: 88px;
  }

  .price {
    color: ${({theme}) => theme.COLORS.CAKE_200};
  }

  .amount {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    button {
      background: transparent;
    }
  }

  button {
    width: 100%;
  }
`;
