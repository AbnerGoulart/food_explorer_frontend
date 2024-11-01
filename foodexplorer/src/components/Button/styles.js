import styled from "styled-components";

export const Container = styled.button`
  width: 316px;
  height: 56px;

  background-color: ${({theme}) => theme.COLORS.TOMATO_100};
  color: ${({theme}) => theme.COLORS.LIGHT_100};

  font-family: inherit;

`;