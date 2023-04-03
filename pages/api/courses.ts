

import withMiddleware from 'lib/api/middlewares/withMiddleware';
import catchErrors from 'lib/api/middlewares/catchErrors'
import allowMethods from 'lib/api/middlewares/allowMethods'
import {getAllCoursesHandler} from 'lib/api/controllers/courses'

export default withMiddleware(catchErrors,allowMethods(['GET']),getAllCoursesHandler)
