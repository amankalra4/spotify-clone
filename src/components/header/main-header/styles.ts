import styled from "styled-components";
import { lgScreen, xlScreen } from "@modules/libs/css-modules";

export const HeaderContainer = styled.div`
  background-color: black;
  font-weight: 700;
`;

export const HeaderData = styled.div`
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
  @media (min-width: ${lgScreen}) {
    max-width: 970px;
    height: 80px;
  }
`;

export const LargeScreen = styled.div`
  @media (max-width: ${lgScreen}) {
    display: none;
  }
`;

export const Mobile = styled.div`
  display: none;
  @media (max-width: ${lgScreen}) {
    display: block;
  }
`;
