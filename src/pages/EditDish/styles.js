import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  .edit-wrapper {
    margin-top: 0;
    input,
    textarea {
      width: 100%;
      height: 80%;
    }

    p {
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
      margin-bottom: 1rem;
    }

    .ingredientInput {
      .ingredients {
        width: 100%;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        border-radius: 0.3125rem;
        height: auto;
        gap: 1rem;

        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        flex-wrap: wrap;
        padding: 8px;
      }
    }

    .descriptionInput {
      width: 100%;
      height: 140px;
    }

    .buttons {
      button {
        width: 100%;
        margin: 1rem auto 3.3125rem;
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      width: 90vw;
      max-width: 1120px;
      gap: 2rem;

      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: space-between;

      margin-bottom: 2rem auto 7.5rem;

      h1 {
        font-family: Poppins;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
      }

      .backButton {
        display: flex;
        width: 100%;
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 140%;
      }

      .title {
        display: block;
        width: 100%;
      }

      .imgInput {
        max-width: 229px;
        flex: 1 1 auto;
      }

      .nameInput {
        max-width: 463px;
        flex: 1 1 auto;
      }

      .categoryInput {
        max-width: 364px;
        flex: 1 1 auto;
      }

      .ingredientInput {
        max-width: 837px;
        flex: 1 1 auto;

        .ingredients {
          background-color: ${({ theme }) => theme.COLORS.DARK_900};
          border-radius: 0.3125rem;
          height: auto;
          gap: 1rem;

          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          padding: 8px;
        }
      }

      .priceInput {
        max-width: 251px;
        flex: 1 1 auto;
      }

      .buttons {
        display: flex;
        flex-direction: row;
        gap: 2rem;

        border: 2px dashed green;

        button {
          width: fit-content;
          padding: 12px 24px;
        }
      }
    }
  }
`;
