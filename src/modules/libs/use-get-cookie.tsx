import { useEffect, useState } from "react";
import { getCookie } from "../utils/common-functions";

const useGetCookie = () => {
    const [cookieData, setCookieData] = useState("");

    useEffect(() => {
        setCookieData(getCookie("accessToken"));
    }, []);

    return {
        cookieData
    };
};

export default useGetCookie;
