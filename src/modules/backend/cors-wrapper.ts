import Cors from "cors";
import initMiddleware from "./init-middleware";

export const corsWrapper = initMiddleware(
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ["GET", "POST", "OPTIONS"]
    })
);
