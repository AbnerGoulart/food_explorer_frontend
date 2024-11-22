import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 2rem;
  
  .wrapper {
    width: 364px;
    
    input, textarea {
      width: 100%;
    }
  }
`