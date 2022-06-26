export const setCookie = (name: string, value: string, minutes?: number) => {
    if (typeof window !== "undefined") {
        let expires = "";
        if (minutes) {
            const date = new Date();
            date.setTime(date.getTime() + minutes * 60 * 1000);
            expires = `; expires=${date.toUTCString()}`;
        }
        document.cookie = `${name}=${value || ""}${expires}; path=/`;
    }
};

export const getCookie = (name: string, context?: any) => {
    if (typeof window !== "undefined") {
        const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
        if (match) return match[2];
    } else if (context?.req?.cookies) {
        return context.req.cookies[name];
    }
    return "";
};

export const removeCookie = (name: string) => {
    const expires = "; expires=Fri, 31 Dec 1999 23:59:59 GMT";
    document.cookie = `${name}=${expires}; path=/`;
};
