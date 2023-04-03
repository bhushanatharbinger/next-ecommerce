import type { NextApiRequest, NextApiResponse } from 'next';
import { res_401,res_200 } from '../utils/CustomResponse';
import logger from '../utils/logger'
import jwt from 'jsonwebtoken'
import {AUTH_SECRET_KEY,authenticator} from '../utils/session';

export const loginHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const request = req.body;
    const email = request.email;
    const password = request.password;
    
    logger.info('Login Request')
    if (email === 'kumar@mail.com' && password === 'kumar') {
        const payload = {user:{email}}
        const token = jwt.sign(payload, AUTH_SECRET_KEY, {
            expiresIn: '24h',
            mutatePayload: true
        });
        authenticator.setCookie(req, res, payload, token);
        res_200(res,{user:{email}});
    } else {
        res_401(res,"User Not Found");
    }
  }