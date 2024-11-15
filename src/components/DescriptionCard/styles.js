import styled from "styled-components";
import { PiReceiptLight } from "react-icons/pi";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 80vw;
  max-width: 20rem;
  margin: 1.5rem auto 3rem;
  font-family: 'Poppins';
  position: relative;


  .header {
    width: 100%;
  }

  img {
    width: 16.5rem;
    margin: 1rem auto;
  }

  h1 {
    font-size: 1.6875rem;
    font-weight: 500;
    margin: 0 auto;
    text-align: center;
  }

  p {
    font-size: 1rem;
    text-align: center;
    margin: 1.2rem auto;
  }

  .tags {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    padding: 0.5rem;
    margin-bottom: 2.2rem;
  }

  .checkout {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;

    .counter {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
    }

    .counter button {
      background: transparent;
      width: 1.75rem;
      height: 1.75rem;
      font-size: 1.125rem;
      margin: 0 0.25rem;
    }
  }
`;

export const ReceiptIcon = styled(PiReceiptLight)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  cursor: pointer;
`;
