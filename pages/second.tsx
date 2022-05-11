import { useRouter } from "next/router";
import { useEffect } from "react";

const Second = () => {
    const { query } = useRouter();
    useEffect(() => {
        if (query.code) {
            getData1(query.code as string, query.state as string)
        }
    }, [query.code]);

    const getData1 = async(code: string, state: string) => {
        const res = await fetch(`/api/callback?code=${code}&state=${state}`);
        // console.log('res: ', res);
        const data = res.json();
        data.then(el => console.log("second ell", el)).catch(err => console.log("err", err))
      }

    return (
        <div>
            hii
        </div>
    )
}

export default Second;
