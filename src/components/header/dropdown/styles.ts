import { css } from "@emotion/css";

export const profileDropdown = css`
  .MuiSelect-filled {
    background: black;
    color: white;
    font-weight: 700;
  }

  .MuiSelect-icon {
    color: white;
  }

  .MuiFilledInput-input {
    padding-top: 10px;
  }

  .MuiSelect-nativeInput {
    border: none;
  }
  .MuiFilledInput-root::before {
    border-bottom: none !important;
  }
`;
