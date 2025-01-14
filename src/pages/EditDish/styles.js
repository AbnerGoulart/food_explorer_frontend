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

  .buttons {
    display: flex;
    gap: 2rem;
  }
`