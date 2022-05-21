import { css } from "@emotion/css";
import {
  backgroundImageLargeScreen,
  backgroundImageMediumScreen,
  backgroundImageSmallScreen,
} from "../../../constants";
import {
  lgScreen,
  mdScreen,
  smScreen,
  xlScreen,
} from "../../../modules/libs/css-modules";

export const container = css`
  background-color: rgb(41, 65, 171);
  background-image: url(${backgroundImageSmallScreen});
  background-position: 65% 55%;
  background-size: auto 177%;
  background-repeat: no-repeat;

  @media (min-width: ${mdScreen}) {
    background-image: url(${backgroundImageMediumScreen});
    background-position: center center;
    background-size: auto 181%;
    background-repeat: no-repeat;
  }

  @media (min-width: ${xlScreen}) {
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-image: url(${backgroundImageLargeScreen});
    background-position: right center;
  }
`;

export const centerSection = css`
  font-family: Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  min-height: 480px;
  margin: 0px auto;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  max-width: 100%;
  box-sizing: border-box;
  color: #1ed760;
  padding: 35px 15px;
  @media (min-width: ${mdScreen}) {
    min-height: 600px;
    width: 750px;
    padding: 75px 15px;
  }
  @media (min-width: ${lgScreen}) {
    width: 970px;
  }

  @media (min-width: ${xlScreen}) {
    width: 1170px;
  }
`;

export const content = css`
  padding: 48px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: ${xlScreen}) {
    padding: 64px 0px;
    align-items: flex-start;
  }

  > h1 {
    font-size: calc(24px + 8 * ((100vw - 320px) / 160));
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin: 0px 0px 8px;
    padding: 0px;
    font-weight: 900;
    text-align: center;
    padding-top: 70px;
    @media (min-width: ${xlScreen}) {
      text-align: start;
    }
    @media (min-width: ${mdScreen}) {
      font-size: 60px !important;
      min-width: 372px;
    }
    @media (min-width: ${smScreen}) {
      font-size: 32px;
    }
  }
`;

export const subHeading = css`
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  display: block;
  margin: 16px 0px;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.25px;
  padding: 0px 0px 1em;
  color: inherit;
  @media (min-width: ${mdScreen}) {
    margin: 32px 0px 0px;
    padding: 0px;
    font-size: 24px;
  }
  @media (min-width: ${xlScreen}) {
    text-align: start;
    max-width: 558px;
  }
`;

export const bottomContent = css`
  margin: 0px;
  @media (min-width: ${mdScreen}) {
    margin: 48px 0px 0px;
  }
`;
