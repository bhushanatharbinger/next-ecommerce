import { Middleware } from './withMiddleware';
import { NextApiRequest } from 'next';
import getUserByCookie from '../utils/getUserByCookie';
import { res_401 } from '../utils/CustomResponse';

type User = {
  userId: number,
}

export type NextApiRequestWithUser = NextApiRequest & User;

export const withUser: Middleware<NextApiRequestWithUser> = async (req, res, next) => {
  const authCookie = await getUserByCookie({ req });
  if (authCookie) {
    req.userId = authCookie.userId;
    await next();
  } else {
    res_401(res, 'Invalid auth cookie.');
  }
};

export default withUser;