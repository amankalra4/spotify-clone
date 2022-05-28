import styled from "styled-components";
import { hoverColor, legalTermsColor, lgScreen, lightGrayColor, mdScreen, xlScreen } from "@modules/libs/css-modules";

const FooterContainer = styled.footer`
    background: #000;
    padding: 50px 0 20px;
    dl {
        padding: 0 15px;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.8rem;
        @media (min-width: ${mdScreen}) {
            gap: 1.2rem;
        }
    }
    dt {
        margin: 50px 0 22px;
        color: ${legalTermsColor};
        font-size: 12px;
        font-weight: 900;
        line-height: 1.4;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        @media (min-width: ${mdScreen}) {
            margin: 20px 0;
        }
    }
    dd {
        padding: 3px 0 8px;
        margin: 0;
        width: 100%;
        @media (min-width: ${mdScreen}) {
            padding: 3px 0 15px;
        }
    }
    a:hover {
        color: ${hoverColor};
        cursor: pointer;
    }
    > * {
        color: white;
    }
    @media (min-width: ${lgScreen}) {
        padding: 80px 0 50px;
    }
`;

const FooterNavigation = styled.nav`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 20px;
    padding: 0 10px;
    @media (min-width: ${mdScreen}) {
        width: 750px;
        flex-direction: row;
        gap: unset;
        padding: 0;
    }
    @media (min-width: ${lgScreen}) {
        width: 970px;
    }
    @media (min-width: ${xlScreen}) {
        width: 1170px;
    }
`;

const LogoContainer = styled.a`
    padding: 0 15px;
    display: block;
    height: max-content;
    @media (min-width: ${mdScreen}) {
        width: 16.66666667%;
    }
`;

const FooterLogo = styled.svg`
    fill: currentColor;
    display: inline-block;
    height: 27px;
    width: 89px;
    @media (min-width: ${lgScreen}) {
        height: 40px;
        width: 132px;
    }
`;

const NavigationLinksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    @media (min-width: ${mdScreen}) {
        flex-direction: row;
        gap: 4rem;
    }
`;

const SocialLogoContainer = styled.div`
    display: flex;
    gap: 20px;
    margin: 120px 15px 15px;
    @media (min-width: ${lgScreen}) {
        margin: 0 15px 0 auto;
    }
`;

const SocialMediaLogoContainer = styled.a`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${lightGrayColor};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GlobeContainer = styled.div`
    width: 100%;
    color: ${legalTermsColor};
    a {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        align-items: center;
    }
    span {
        font-size: 12px;
    }
`;

const OtherLinks = styled.div`
    color: ${legalTermsColor};
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    ul {
        margin: 0 45px 0 0;
        padding: 0 0 0 15px;
        display: flex;
        flex-wrap: wrap;
    }
    li {
        list-style: none;
        display: inline-block;
        line-height: normal;
        letter-spacing: 0;
        margin-right: 24px;
        padding: 10px 0;
        @media (min-width: ${mdScreen}) {
            padding: 0;
        }
    }
    span {
        font-size: 10px;
        margin-top: 10px;
        @media (min-width: ${mdScreen}) {
            margin-top: unset;
            font-size: 12px;
        }
    }
    @media (min-width: ${mdScreen}) {
        align-items: unset;
        padding: 20px 0;
    }
`;

export {
    FooterContainer,
    FooterNavigation,
    LogoContainer,
    FooterLogo,
    NavigationLinksContainer,
    SocialLogoContainer,
    SocialMediaLogoContainer,
    OtherLinks,
    GlobeContainer
};
