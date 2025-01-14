import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 2rem;
  
  .wrapper {
    input, textarea {
      width: 100%;
    }
  }

  .ingredients {
    background-color: ${({theme}) => theme.COLORS.DARK_900};
    border-radius: 0.3125rem;
    height: auto;
    gap: 1rem;

    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    padding: 8px;

  }
`