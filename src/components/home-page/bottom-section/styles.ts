import styled from "styled-components";
import {
  lgScreen,
  mdScreen,
  smScreen,
  darkRedColor,
  lighRedHomeBackground,
} from "@modules/libs/css-modules";

const BottomContainer = styled.section`
  background-color: ${lighRedHomeBackground};
  color: ${darkRedColor};
  padding: 150px 0;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 15px;
  row-gap: 20px;
  text-align: center;
`;

const H1title = styled.h1`
  margin: 0px;
  padding: 0px;
  font-size: calc(24px + 24 * ((100vw - 320px) / 160));
  font-weight: 900;
  line-height: 1.2;
  @media (min-width: ${smScreen}) {
    font-size: 48px;
  }
  @media (min-width: ${mdScreen}) {
    font-size: 74px;
  }
  @media (min-width: ${lgScreen}) {
    width: auto;
  }
`;

const Footer = styled.footer`
  font-size: 12px;
  margin-top: 40px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.25px;
  text-align: center;
  width: 90%;
`;

export { BottomContainer, Header, H1title, Footer };
