import { css } from "@emotion/css";
import { lgScreen } from "../../modules/libs/css-modules";

export const divider = css`
  border-color: white !important;
  height: 16px !important;
  margin: auto 17px !important;
  @media (max-width: 991px) {
    margin: 18px 0 40px !important;
    height: 2px !important;
    width: 20px !important;
  }
`;

export const logo1 = css`
  fill: white;
  display: inline-block;
  height: 27px;
  width: 89px;
  @media (min-width: ${lgScreen}) {
    height: 40px;
    width: 132px;
  }
`;
