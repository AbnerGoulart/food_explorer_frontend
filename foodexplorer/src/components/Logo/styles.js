import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.65rem;

  h1 {
    font-size: ${(props) => props.size};
    color: ${({theme}) => theme.COLORS.LIGTH_100};
  }

  img {
    width: ${(props) => props.size};
  }
  
`;