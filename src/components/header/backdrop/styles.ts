import { css } from "@emotion/css";
import {
  grayColor,
  hoverColor,
  smScreen,
} from "../../../modules/libs/css-modules";

export const backdrop = css`
  position: relative;
  .MuiBackdrop-root {
    color: white;
    width: 100%;
    justify-content: flex-end;
    align-items: unset;
  }
`;

export const account = css`
  font-weight: 400;
  font-size: 28px;
  color: ${grayColor};
  > p {
    cursor: pointer;
    &:hover {
      color: ${hoverColor};
    }
  }

  @media (max-width: ${smScreen}) {
    font-size: 24px;
  }
`;

export const hamMenuContainer = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 38px;
  align-items: flex-start;
  width: 447px;
  margin: 0 auto;
  top: 0;
  height: 100%;
  justify-content: space-between;
  max-width: 100vw;
  background-color: black;
`;

export const closeIcon = css`
  cursor: pointer;
  position: absolute;
  right: 10%;
  top: 0;
`;

export const myProfileIcon = css`
  font-size: 2.5rem !important;
  color: white;
`;

export const menuIcon = css`
  color: white;
  cursor: pointer;
  margin-left: 8px;
`;