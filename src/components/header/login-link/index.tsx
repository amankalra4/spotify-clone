/* eslint-disable max-len */
import Link from "next/link";
import { generate } from "randomstring";
import { apiScope, authorizationURL, clientId, redirectURI } from "@src/constants";

const LoginLink = () => {
    return (
        <Link
            href={`${authorizationURL}?response_type=code&client_id=${clientId}&scope=${apiScope}&redirect_uri=${redirectURI}&state=${generate(
                16
            )}&show_dialog=true`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <a>Login</a>
        </Link>
    );
};

export default LoginLink;
