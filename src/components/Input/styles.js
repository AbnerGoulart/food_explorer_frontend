import styled from "styled-components";

export const Container = styled.div`
  height: 3rem;
  width: 100%;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 0.3125rem;

  input {
    border: none;
    outline: none;
    background: transparent;
    height: 100%;
    width: 100%;
    
    font-family: "Poppins";
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    &::placeholder {
      font-family: "Poppins";
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    margin-left: 1rem;
  }
`;
