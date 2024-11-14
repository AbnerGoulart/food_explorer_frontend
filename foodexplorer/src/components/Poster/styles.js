import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  max-width: 23.5rem;
  height: 7.5rem;
  border-radius: 0.2rem;
  background: ${({ theme }) => theme.COLORS.GRADIENT_200};
  position: relative;
  display: flex;
  align-items: center;
  margin: 24px auto;

  .description {
    font-family: 'Poppins', sans-serif;
    width: 60%;
    position: absolute;
    right: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 1.125rem;
    font-weight: 500;
  }

  h3 {
    font-size: 0.75rem;
    font-weight: 400;
  }

  img {
    width: 50vw;
    max-width: 12rem;
    height: auto;
    position: absolute;
    bottom: 0;
    left: -2rem;
  }
`;
