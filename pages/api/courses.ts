import type { NextApiRequest, NextApiResponse } from 'next';

// fake data
import courses from '../../lib/db/data/courses';

export default (req: NextApiRequest, res: NextApiResponse) => {
  setTimeout(() => {
    res.status(200).json(courses);
  }, 800);
}
