import { Middleware } from './withMiddleware';
import { res_401 } from '../utils/CustomResponse';

const allowMethods = (allowedMethods: string[]): Middleware => {
  return async function (req, res, next) {
    if (allowedMethods.includes(req.method!) || req.method == 'OPTIONS') {
      await next();
    } else {
        res_401(res,'Method not allowed.');
    }
  };
};

export default allowMethods;