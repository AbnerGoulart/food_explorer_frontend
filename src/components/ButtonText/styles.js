import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  gap: 10px;
  height: 34px;

  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 140%;
`;