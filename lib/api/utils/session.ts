import {Authenticator,AntiCSRF} from "auth-session";
import jwt from 'jsonwebtoken';

export const AUTH_SECRET_KEY = "122323434234"
export const CSRF_SECRET_KEY = "213231321313"
export const authenticator = new Authenticator<{ user: any }>(
    token => jwt.verify(token, AUTH_SECRET_KEY) as any,
    payload => ({ user: payload.user }),
    new AntiCSRF(CSRF_SECRET_KEY)
);