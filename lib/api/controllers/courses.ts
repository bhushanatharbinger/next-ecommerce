import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllCourses } from '../../db/services/courses.services';
import { res_200 } from '../utils/CustomResponse';

export const getAllCoursesHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const courses = getAllCourses()
    setTimeout(() => {
        res_200(res, courses);
    }, 800);
}

export const getCourseByIdHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { cid },
    } = req
    const courses = getAllCourses()
    const course = courses.find(x => x.id === cid);
    setTimeout(() => {
        res_200(res, course);
    }, 800);
}