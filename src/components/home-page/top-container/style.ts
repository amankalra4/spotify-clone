import styled from "styled-components";
import {
  hoverColor,
  mdScreen,
  smScreen,
  xlScreen,
} from "@modules/libs/css-modules";

export const SectionContainer = styled.section`
  position: relative;
  background-color: rgb(41, 65, 171);
`;

export const CenterSection = styled.article`
  min-height: 480px;
  color: ${hoverColor};
  display: grid;
  justify-items: center;
  width: 100%;
  @media (min-width: ${mdScreen}) {
    grid-template-columns: 1.5fr 1fr;
    justify-items: unset;
    width: unset;
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
    align-items: center;
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

export const ImageContainer = styled.div`
  width: 100%;
  @media (min-width: ${mdScreen}) {
    width: unset;
  }
  > img {
    object-fit: cover;
  }
`;
