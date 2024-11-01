import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  display: flex;
  margin: 32px auto;
`;