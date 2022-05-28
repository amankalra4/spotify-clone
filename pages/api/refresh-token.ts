/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";
import { corsWrapper } from "../../src/modules/backend/cors-wrapper";
import { clientId, clientSecret, refreshTokenURL } from "../../src/constants";
import { RefreshTokenResponse } from "../../src/modules/interface/get-access-token-interface";

export default async function getRefreshedToken(apiRequest: NextApiRequest, apiResponse: NextApiResponse) {
    await corsWrapper(apiRequest, apiResponse);
    const refreshToken = apiRequest.query.refresh_token as string;

    const params = new URLSearchParams();
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", refreshToken);

    const options = {
        method: "POST",
        url: refreshTokenURL,
        headers: { Authorization: "Basic " + new Buffer(clientId + ":" + clientSecret).toString("base64") },
        params
    };

    let response = {};

    const data = await axios
        .request(options)
        .then(
            (res: AxiosResponse<RefreshTokenResponse>) =>
                (response = { data: { ...res.data, is_success: true, status: res.status } })
        )
        .catch((error) => (response = { data: { status: error?.response?.status || 404, is_success: false } }));
    apiResponse.send(JSON.stringify(data));
}
