import {
    footerContainer,
    footerNavigation,
    globeContainer,
    logo,
    logoContainer,
    navigationLinksContainer,
    otherLinks,
    socialLogoContainer,
    socialLogoImage,
    socialMediaLogo
} from "./styles";
import Spotify from "../../../public/icons/spotify-logo.svg";
import GlobeLogo from "../../../public/icons/globe-logo.svg";
import Image from "next/image";
import { communityLinks, companyLinks, FooterLinks, otherFooterLinks, socialMediaLogoData, usefulLinks } from "./constants";

const LogoContainer = () => (
    <a className={logoContainer}>
        <Spotify className={logo} />
    </a>
);

const NavigationLinks = ({ data }: { data: FooterLinks }) => (
    <dl>
        <dt>{data[0].heading}</dt>
        {data[0].subtitles.map((el) => (
            <dd key={el}>
                <a>{el}</a>
            </dd>
        ))}
    </dl>
);

const SocialMediaLogo = ({ src, alt }: { src: string; alt: string }) => (
    <a className={socialMediaLogo}>
        <Image src={src} alt={alt} width={25} height={25} className={socialLogoImage} />
    </a>
);

const Footer = () => {
    return (
        <footer className={footerContainer}>
            <nav className={footerNavigation}>
                <LogoContainer />
                <div className={navigationLinksContainer}>
                    <NavigationLinks data={companyLinks} />
                    <NavigationLinks data={communityLinks} />
                    <NavigationLinks data={usefulLinks} />
                </div>
                <div className={socialLogoContainer}>
                    {socialMediaLogoData.map((el) => (
                        <SocialMediaLogo key={el.alt} src={el.src} alt={el.alt} />
                    ))}
                </div>
                <div className={globeContainer}>
                    <a>
                        <GlobeLogo />
                        <span>India English</span>
                    </a>
                </div>
                <div className={otherLinks}>
                    <ul>
                        {otherFooterLinks.map((el) => (
                            <li key={el}>
                                <a>{el}</a>
                            </li>
                        ))}
                    </ul>
                    <span>&#169; 2022 Spotify AB</span>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
