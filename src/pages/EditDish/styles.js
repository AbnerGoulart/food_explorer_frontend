import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 2rem;

  .edit-wrapper {
    input,
    textarea {
      width: 100%;
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
        display: block;
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
      }

      .priceInput {
        max-width: 251px;
        flex: 1 1 auto;
      }

      .descriptionInput {
        width: 100%;
        height: 172px;

        textarea {
          height: 100%;
        }
      }
    }
  }

  .buttons {
    display: flex;
    gap: 2rem;

    button {
      width: fit-content;
      padding: 12px 24px;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      margin: 2rem 0 2rem auto;
    }
  }
`;
