import { css } from "@emotion/css";
import { lgScreen, xlScreen } from "../../../modules/libs/css-modules";

export const headerContainer = css`
  background-color: black;
  font-weight: 700;
`;

export const headerData = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 750px;
  height: 54px;
  margin: 0 auto;
  padding: 0 15px;
  @media (min-width: ${xlScreen}) {
    max-width: 1170px !important;
  }
  @media (min-width: ${lgScreen}) {
    max-width: 970px;
    height: 80px;
  }
`;

export const largeScreen = css`
  @media (max-width: ${lgScreen}) {
    display: none;
  }
`;

export const mobile = css`
  display: none;
  @media (max-width: ${lgScreen}) {
    display: block;
  }
`;
