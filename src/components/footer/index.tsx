import {
    FooterContainer,
    FooterNavigation,
    GlobeContainer,
    logo,
    LogoContainer,
    NavigationLinksContainer,
    OtherLinks,
    SocialLogoContainer,
    SocialMediaLogoContainer
} from "./styles";
import Spotify from "../../../public/icons/spotify-logo.svg";
import GlobeLogo from "../../../public/icons/globe-logo.svg";
import {
    communityLinks,
    companyLinks,
    FooterLinks,
    otherFooterLinks,
    socialMediaLogoData,
    usefulLinks
} from "./constants";

const Logo = () => (
    <LogoContainer>
        <Spotify className={logo} />
    </LogoContainer>
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

const Footer = () => {
    return (
        <FooterContainer>
            <FooterNavigation>
                <Logo />
                <NavigationLinksContainer>
                    <NavigationLinks data={companyLinks} />
                    <NavigationLinks data={communityLinks} />
                    <NavigationLinks data={usefulLinks} />
                </NavigationLinksContainer>
                <SocialLogoContainer>
                    {socialMediaLogoData.map(({ id, Icon }) => (
                        <SocialMediaLogoContainer key={id}>
                            <Icon />
                        </SocialMediaLogoContainer>
                    ))}
                </SocialLogoContainer>
                <GlobeContainer>
                    <a>
                        <GlobeLogo />
                        <span>India English</span>
                    </a>
                </GlobeContainer>
                <OtherLinks>
                    <ul>
                        {otherFooterLinks.map((el) => (
                            <li key={el}>
                                <a>{el}</a>
                            </li>
                        ))}
                    </ul>
                    <span>&#169; 2022 Spotify AB</span>
                </OtherLinks>
            </FooterNavigation>
        </FooterContainer>
    );
};

export default Footer;
