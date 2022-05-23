import styled from "styled-components";

export const ProfileDropdown = styled.div`
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
