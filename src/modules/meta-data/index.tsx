import Head from "next/head";

type IMetaDataProps = {
    pageTitle: string;
    ogTitle: string;
    description: string;
    ogDescription: string;
    image: string;
};

const MetaData = ({ pageTitle, description, image, ogDescription, ogTitle }: IMetaDataProps) => {
    return (
        <Head>
            <title>{pageTitle}</title>
            <meta property="og:title" content={ogTitle} />
            <meta name="description" content={description} />
            <meta property="og:description" content={ogDescription} />
            <meta property="og:image" content={image} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={ogTitle} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:description" content={ogDescription} />
        </Head>
    );
};

export default MetaData;
