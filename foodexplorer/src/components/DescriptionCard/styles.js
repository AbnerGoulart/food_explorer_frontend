import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 677px;
  width: 316px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;

  margin: 427px auto 47px;

  position: relative;
  font-family: 'Poppins';

  img {
    width: 264px;
    margin: 16px;
    position: absolute;
    top: 83px;
  }

  h1 {
    position: absolute;
    top: 380px;
    font-size: 27px;
    font-weight: 500;
    margin-bottom: 24px;
  }

  p {
    font-size: 16px;
    position: absolute;
    top: 420px;
    left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 24px auto;
  }

  .tags {
    position: absolute;
    width: 100%;
    height: auto;
    top: 516px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: flex-start;
    padding: 8px;

  }

  .header {
    margin: 0;
    font-size: 24px;

    position: absolute;
    top: 0;
    left: 0;
    padding: 0;

  }

  .checkout {
    display: flex;
    position: absolute;
    top: 630px;
    justify-content: center;
    align-items: center;
    gap: 8px;

    max-width: 100%;

    .counter {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .counter button {
      background: transparent;
      width: 50px;
      height: 50px;
      font-size: 18px;
      margin: 8px;
    }
  }

`;
