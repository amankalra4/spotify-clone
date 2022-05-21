import { css } from "@emotion/css";

export const browserLink = css`
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  background-color: transparent;
  border: 0px;
  border-radius: 500px;
  padding: 0px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    text-transform: none;
    letter-spacing: normal;
  }
  @media (min-width: 1200px) {
    width: auto;
  }
`;

export const playerText = css`
  background-color: #1ed760;
  color: #2941ab;
  border-radius: 500px;
  font-size: inherit;
  padding: 14px 32px;
  justify-content: center;
  text-decoration: none !important;
  text-transform: uppercase;
  &:hover {
    transform: translate3D(0, -1px, 0) scale(1.03);
  }
`;
