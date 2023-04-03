import withMiddleware from 'lib/api/middlewares/withMiddleware';
import catchErrors from 'lib/api/middlewares/catchErrors'
import allowMethods from 'lib/api/middlewares/allowMethods'
import {loginHandler} from 'lib/api/controllers/login'

export default withMiddleware(catchErrors,allowMethods(['POST']),loginHandler)
