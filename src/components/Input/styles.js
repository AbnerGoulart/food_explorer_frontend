import styled from "styled-components";

export const Container = styled.div`
  max-height: 48px;
  width: 100%;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 0.3125rem;
  padding: 12px 32px;
  gap: 0.5rem;


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
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
