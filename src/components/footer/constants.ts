import { Facebook, Instagram, SvgIconComponent, Twitter } from "@mui/icons-material";

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
    Icon: SvgIconComponent
    id: string;
};

export const socialMediaLogoData: Array<ISocialMediaLogoData> = [
    {
        Icon: Facebook,
        id: "facebook"
    },
    {
        Icon: Instagram,
        id: "instagram"
    },
    {
        Icon: Twitter,
        id: "twitter"
    }
];
