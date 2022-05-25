import styled from "styled-components";
import { hoverColor, lgScreen2, smScreen } from "@modules/libs/css-modules";

export const HeaderContainer = styled.div`
  display: flex;
  @media (max-width: ${lgScreen2}) {
    flex-direction: column;
  } ;
`;

export const CommonHeaderContainer = styled.a`
  font-weight: 700 !important;
  color: white !important;
  text-transform: none !important;
  cursor: pointer;
  &:hover {
    color: ${hoverColor} !important;
  }
  padding: 28px 17px;
  @media (max-width: ${lgScreen2}) {
    font-size: 36px !important;
    line-height: 1 !important;
    padding: 0 0 25px !important;
  }
  @media (max-width: ${smScreen}) {
    font-size: 30px !important;
  }
`;
