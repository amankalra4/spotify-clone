import { css } from "@emotion/css";
import { xlScreen } from "../../../modules/libs/css-modules";

export const header = css`
  background-color: black;
  font-weight: 700;
  //filter: blur(1px);
`;

export const header2 = css`
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
  @media (min-width: 992px) {
    max-width: 970px;
    height: 80px;
  }
`;

export const largeScreen = css`
  @media (max-width: 992px) {
    display: none;
  }
`;

export const mobile = css`
  display: none;
  @media (max-width: 992px) {
    display: block;
  }
`;
