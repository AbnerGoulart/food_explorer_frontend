import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .content {
    width: 372px;
    display: flex;
    flex-direction: column;
    margin: 36px auto;
    justify-content: flex-start;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};
  }

  input {
    width: 100%;
  }

`