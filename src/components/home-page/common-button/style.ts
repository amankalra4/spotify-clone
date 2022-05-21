import { css } from "@emotion/css";

export const browserLink = css`
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
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

export const buttonText = (backgroundColor: string, textColor: string) => {
    return css`
        background-color: ${backgroundColor};
        transition: all 0.4s ease;
        color: ${textColor};
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
};
