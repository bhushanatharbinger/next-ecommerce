import { Middleware } from './withMiddleware';
import { res_500 } from '../utils/CustomResponse';

const captureErrors: Middleware = async (req, res, next) => {
  try {
    await next();
  } catch (error) {
    console.error(error);
    res_500(res,'Server error!');
  }
};

export default captureErrors;