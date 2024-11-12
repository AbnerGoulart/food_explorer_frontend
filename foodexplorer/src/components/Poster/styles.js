import styled from "styled-components";

export const Container = styled.div`
  width: 376px;
  height: 120px;
  border-radius: 3px;
  background: ${({theme}) => theme.COLORS.GRADIENT_200};
 
  position: relative;
  display: flex;
  align-items: center;

  margin: 68px auto 62px;

  .description {
    font-family: 'Poppins', sans-serif;

    width: 220px;
    position: absolute;
    right: 8px;

    display: flex;
    flex-direction: column;
    
  }

  h1 {
    font-size: 18px;
    font-weight: 500;
  }

  h3 {
    font-size: 12px;
    font-weight: 400;
  }

  img {
    display: flex;
    width: 191px;
    height: 149px;
    position: absolute;
    bottom: 0px;
    left: -34px;

  }

`;