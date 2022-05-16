export type FooterLinks = {
    heading: string;
    subtitles: string[];
}[];

export const companyLinks: FooterLinks = [
    {
        heading: "COMPANY",
        subtitles: ["About", "Jobs", "For the Record"]
    }
];

export const communityLinks: FooterLinks = [
    {
        heading: "COMMUNITIES",
        subtitles: ["For Artists ", "Developers", "Advertising", "Investors", "Vendors"]
    }
];

export const usefulLinks: FooterLinks = [
    {
        heading: "USEFUL LINKS",
        subtitles: ["Support", "Web Player", "Free Mobile App"]
    }
];

export const otherFooterLinks = ["Legal", "Privacy Center", "Privacy Policy", "Cookies", "About Ads"];

export type ISocialMediaLogoData = {
    src: string;
    alt: string;
}[];

export const socialMediaLogoData: ISocialMediaLogoData = [
    {
        src: "/icons/instagram-logo.svg",
        alt: "spotify-clone-instagram-logo"
    },
    {
        src: "/icons/twitter-logo.svg",
        alt: "spotify-clone-twitter-logo"
    },
    {
        src: "/icons/facebook-logo.svg",
        alt: "spotify-clone-facebook-logo"
    }
];
