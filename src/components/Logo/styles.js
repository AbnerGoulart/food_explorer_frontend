import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.65rem;
  position: relative;
  width: 220px;
  height: 68px;
  cursor: pointer;

  h1 {
    font-size: ${(props) => props.size};
    color: ${({ theme }) => theme.COLORS.LIGTH_100};
    font-family: 'Roboto';
  }

  img {
    width: ${(props) => props.size};
  }

  span {
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    line-height: 160%;
    color: ${({theme}) => theme.COLORS.CAKE_200};

    position: absolute;
    bottom: 0;
    right: 6px;
  }
`;
