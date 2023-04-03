import cookie from "cookie"

function parseCookies(req) {
    return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}

export default async function getUserByCookie({ req }) {
    const cookies = parseCookies(req);
    // And then get element from cookie by name
    return {
        userId: cookies.userId,
    }
}