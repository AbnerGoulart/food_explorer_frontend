import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.375rem;
  height: 2rem;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT_500};
  color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.LIGHT_100 : theme.COLORS.LIGHT_500};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : `none`};

  border-radius: 0.3125rem;
  padding: 0.8rem 0.5rem;

  > button {
    border: none;
    background: none;
    font-size: 16px;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > input {
    font-family: "Roboto";
    font-size: 0.9rem;

    height: 2rem;
    max-width: 8rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: none;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
