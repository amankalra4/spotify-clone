import { css } from "@emotion/css";
import { hoverColor, smScreen } from "../../../modules/libs/css-modules";

export const commonHeaderCSS = css`
  font-weight: 700 !important;
  color: white !important;
  text-transform: none !important;
  cursor: pointer;
  &:hover {
    color: ${hoverColor} !important;
  }
  padding: 28px 17px;
  @media (max-width: 991px) {
    font-size: 36px !important;
    line-height: 1 !important;
    padding: 0 0 25px !important;
  }
  @media (max-width: ${smScreen}) {
    font-size: 30px !important;
  }
`;

export const commonHeaderCSS1 = css`
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
  } ;
`;
