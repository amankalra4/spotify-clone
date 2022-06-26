/* eslint-disable camelcase */
import { clientId, clientSecret, getTokenURL, redirectURI } from "@src/constants";
import { TokenData } from "@src/modules/interface/get-access-token-interface";
import { getCookie, setCookie } from "@src/modules/utils/common-functions";
import axios, { AxiosResponse } from "axios";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Navigating = ({ tokenData }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { replace } = useRouter();
    useEffect(() => {
        if (!getCookie("accessToken") && typeof tokenData !== "string") {
            setCookie("accessToken", tokenData.accessToken, tokenData.expiryTime / 60);
            replace("/personalised-home");
        }
    }, []);

    return <h1>Redirecting...</h1>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { query } = context;

    const options = {
        method: "POST",
        url: getTokenURL,
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + new Buffer(clientId + ":" + clientSecret).toString("base64")
        },
        params: {
            grant_type: "authorization_code",
            client_id: clientId,
            code_verifier: query.state,
            code: query.code,
            redirect_uri: redirectURI
        }
    };

    const apiResponse = await axios
        .request(options)
        .then((res: AxiosResponse<TokenData>) => res.data)
        .catch((error) => console.error("error", error));

    return {
        props: { tokenData: apiResponse ? { accessToken: apiResponse.access_token, expiryTime: apiResponse.expires_in } : "" }
    };
}

export default Navigating;

// const x = await fetch(`http://localhost:3000/api/refresh-token?refresh_token=${data.data.refresh_token}`);
// const data1 = await x.json();
