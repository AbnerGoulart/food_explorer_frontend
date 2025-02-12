import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 90vw;

    .backButton {
      padding: 0;
    }

    input,
    textarea {
      width: 100%;
      height: 80%;
    }

    .imgInput {
      label {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        border-radius: 0.3125rem;
        gap: 0.5rem;

        height: 3rem;
        width: 100%;
        margin-bottom: 1rem;

        display: flex;
        align-items: center;

        border: none;
        outline: none;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        width: 100%;
        font-family: "Poppins";
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        svg {
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
          font-size: 24px;
        }
      }
    }

    #imgUpload {
      display: none;
    }

    h1 {
      font-family: Poppins;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
    }

    .custom-file-upload {
      border: 1px solid #ccc;
      display: inline-block;
      padding: 6px 12px;
      cursor: pointer;
    }

    p {
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
      margin-bottom: 1rem;
    }

    .categoryInput {
      max-width: 100%;
      flex: 1 1 auto;
      margin-bottom: 24px;

      select {
        appearance: none;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        border-radius: 0.3125rem;
        height: 3rem;
        width: 100%;
        gap: 1rem;

        outline: none;
        border: none;
        padding: 1rem;

        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.4545 7.8295C4.89384 7.39017 5.60616 7.39017 6.0455 7.8295L12 13.784L17.9545 7.8295C18.3938 7.39017 19.1062 7.39017 19.5455 7.8295C19.9848 8.26884 19.9848 8.98116 19.5455 9.4205L12.7955 16.1705C12.3562 16.6098 11.6438 16.6098 11.2045 16.1705L4.4545 9.4205C4.01517 8.98116 4.01517 8.26884 4.4545 7.8295Z" fill="%23C4C4CC"/></svg>');
        background-repeat: no-repeat;
        background-position: right 10px center;
        background-size: 24px;
      }
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
      display: flex;
      gap: 2rem;

      button {
        width: 100%;
        margin: 1rem auto 3.3125rem;
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      width: 90vw;
      max-width: 1120px;

      display: flex;
      flex-direction: row;
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
        width: 364px;
        flex: 1 1 auto;

        select {
          background-color: ${({ theme }) => theme.COLORS.DARK_900};
          border-radius: 0.3125rem;
          height: 3rem;
          width: 100%;
          gap: 1rem;

          outline: none;
          border: none;
          padding: 1rem;

          font-family: Roboto;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%;
          color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }
      }

      .ingredientInput {
        min-width: 817px;
        min-height: 48px;
        flex: 1 1 auto;

        .ingredients {
          background-color: ${({ theme }) => theme.COLORS.DARK_900};
          border-radius: 0.3125rem;
          height: auto;
          gap: 1rem;
          max-width: 817px;

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
        gap: 2rem;
        margin: 2rem 0 2rem auto;

        button {
          width: fit-content;
          padding: 12px 24px;
        }
      }
    }
  }
`;
