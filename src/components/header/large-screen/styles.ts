import { css } from "@emotion/css";
import { hoverColor } from "../../../modules/libs/css-modules";

export const childHeader = css`
  display: flex;
`;

export const dropDown = css`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: white;
  cursor: pointer;
  > * {
    &:hover {
      color: ${hoverColor} !important;
    }
  }
`;

export const profileIcon = css`
  font-size: 2.5rem !important;
`;
