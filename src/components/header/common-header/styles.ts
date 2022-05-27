import styled from "styled-components";
import { hoverColor, lgScreen2, smScreen } from "@modules/libs/css-modules";

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 26px;
    @media (max-width: ${lgScreen2}) {
        flex-direction: column;
        align-items: unset;
        column-gap: unset;
        row-gap: 26px;
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
    @media (max-width: ${lgScreen2}) {
        font-size: 36px !important;
        line-height: 1 !important;
    }
    @media (max-width: ${smScreen}) {
        font-size: 30px !important;
    }
`;
