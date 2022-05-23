import styled from "styled-components";
import {
  backgroundImageLargeScreen,
  backgroundImageMediumScreen,
  backgroundImageSmallScreen,
} from "../../../constants";
import {
  hoverColor,
  lgScreen,
  mdScreen,
  smScreen,
  xlScreen,
} from "../../../modules/libs/css-modules";

export const SectionContainer = styled.section`
  background-color: rgb(41, 65, 171);
  background-image: url(${backgroundImageSmallScreen});
  background-position: 65% 55%;
  background-size: auto 177%;
  background-repeat: no-repeat;

  @media (min-width: ${mdScreen}) {
    background-image: url(${backgroundImageMediumScreen});
    background-position: center center;
    background-size: auto 181%;
  }

  @media (min-width: ${xlScreen}) {
    background-size: auto 100%;
    background-image: url(${backgroundImageLargeScreen});
    background-position: right center;
  }
`;

export const CenterSection = styled.article`
  min-height: 480px;
  margin: 0px auto;
  max-width: 100%;
  color: ${hoverColor};
  padding: 0px 15px;
  @media (min-width: ${mdScreen}) {
    min-height: 500px;
    width: 750px;
  }
  @media (min-width: ${lgScreen}) {
    width: 970px;
  }
  @media (min-width: ${xlScreen}) {
    width: 1170px;
  }
`;

export const Content = styled.div`
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
    padding: 70px 0px 0px;
    font-weight: 900;
    text-align: center;
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

export const SubHeading = styled.h2`
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

export const BottomContent = styled.div`
  margin: 0px;
  @media (min-width: ${mdScreen}) {
    margin: 48px 0px 0px;
  }
`;
