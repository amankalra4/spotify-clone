import styled from "styled-components";
import { grayColor, hoverColor, smScreen } from "@modules/libs/css-modules";

export const BackdropContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    .MuiBackdrop-root {
        color: white;
        width: 100%;
        justify-content: flex-end;
        align-items: unset;
    }
`;

export const Account = styled.div`
    font-weight: 400;
    font-size: 28px;
    color: ${grayColor};
    width: max-content;
    > p {
        cursor: pointer;
        margin-top: 0;
        &:hover {
            color: ${hoverColor};
        }
    }

    @media (max-width: ${smScreen}) {
        font-size: 24px;
    }
`;

export const HamMenuContainer = styled.div`
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

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    /* for close icon */
    > svg {
        cursor: pointer;
        position: absolute;
        right: 10%;
        top: 0;
    }
`;

export const MyProfileIcon = styled.div`
    font-size: 2.5rem !important;
    color: white;
    padding-top: 5px;
`;

export const HamBurgerMenu = styled.div`
    color: white;
    cursor: pointer;
    margin-left: 8px;
`;
