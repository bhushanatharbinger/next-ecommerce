import type { NextApiRequest, NextApiResponse } from 'next';

// fake data
import courses from '../../../lib/db/data/courses';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { cid },
  } = req

  const course = courses.find(x => x.id === cid);
  res.status(200).json(course);
}
