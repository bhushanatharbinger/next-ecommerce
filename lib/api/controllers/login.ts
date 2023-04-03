import type { NextApiRequest, NextApiResponse } from 'next';
import { res_401,res_200 } from '../utils/CustomResponse';

export const loginHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const request = req.body;
    const email = request.email;
    const password = request.password;
  
    if (email === 'kumar@mail.com' && password === 'kumar') {
        res_200(res,{user:{email: email, password: password}});
    } else {
        res_401(res,"User Not Found");
    }
  }