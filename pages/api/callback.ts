import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";
import { corsWrapper } from "../../src/modules/backend/cors-wrapper";
import { clientId, clientSecret, getTokenURL, redirectURI } from "../../src/constants";
import { TokenResponse } from "../../src/modules/interface/get-access-token-interface";

export default async function getToken(apiRequest: NextApiRequest, apiResponse: NextApiResponse) {
    await corsWrapper(apiRequest, apiResponse);
    const code = apiRequest.query.code || null;
    const state = apiRequest.query.state || null;

    if (state === null) {
        const response = {
            data: {
                message: "Sorry you are not authorized",
                is_success: false,
                status: 404
            }
        };
        apiResponse.send(JSON.stringify(response));
    } else {
        let response = {};
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
                code_verifier: state,
                code: code,
                redirect_uri: redirectURI
            }
        };
        const data = await axios
            .request(options)
            .then(
                (res: AxiosResponse<TokenResponse>) =>
                    (response = { data: { ...res.data, is_success: true, status: res.status } })
            )
            .catch((error) => (response = { data: { status: error?.response?.status || 404, is_success: false } }));

        apiResponse.send(JSON.stringify(data));
    }
}
