import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 19rem;
  min-height: 462px;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.COLORS.DARK_300};
  background: ${({theme}) => theme.COLORS.DARK_200};

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

  .price {
    color: ${({theme}) => theme.COLORS.CAKE_200};
    font-size: 32px;
  }

  .amount {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    button {
      width: 100%;
    }
  }
`;
