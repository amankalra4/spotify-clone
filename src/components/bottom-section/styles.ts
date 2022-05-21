import { css } from "@emotion/css";
import { lgScreen, mdScreen, xlScreen, smScreen, darkRedColor, lighRedHomeBackground } from "../../modules/libs/css-modules";

const bottomContainer = css`
    background-color: ${lighRedHomeBackground};
    color: ${darkRedColor};
    padding: 150px 0;
    @media (min-width: ${xlScreen}) {
        padding: 80px 0;
    }
`;

const header = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-inline: 15px;
    row-gap: 20px;
    text-align: center;
`;

const title = css`
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

const footer = css`
    font-size: 12px;
    margin-top: 40px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.25px;
    text-align: center;
    width: 90%;
`;

export { bottomContainer, header, title, footer };
