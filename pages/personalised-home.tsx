import { TokenResponse } from "@modules/interface/get-access-token-interface";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PersonalisedHome = () => {
    const { query } = useRouter();
    useEffect(() => {
        if (query.code) {
            getData1(query.code as string, query.state as string);
        }
    }, [query.code]);

    const getData1 = async (code: string, state: string) => {
        const res = await fetch(`/api/get-token?code=${code}&state=${state}`);
        const data: TokenResponse = await res.json();
        console.log("data: ", data);
        const x = await fetch(`/api/refresh-token?refresh_token=${data.data.refresh_token}`);
        const data1 = await x.json();
        console.log("data: ", data1);
    };

    return <div>Hiii</div>;
};

export default PersonalisedHome;
