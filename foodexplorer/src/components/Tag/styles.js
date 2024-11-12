import styled from "styled-components";

export const Container = styled.button`
  height: 24px;
  display: inline-flex;
  padding: 4px 8px;
  gap: 8px;
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.DARK_1000};
  color: ${({theme}) => theme.COLORS.LIGHT_100};

  font-family: inherit;

`;