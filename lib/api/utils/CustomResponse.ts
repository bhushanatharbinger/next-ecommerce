import { NextApiResponse } from 'next';

const statusCode = {
    SUCCESS: 200,
    CONFLICT: 209,
    NOT_FOUND: 401,
    CREATED: 201,
    UNPROCESSABLE: 400,
    INTERNAL_SERVER_ERROR: 500,
}
export const res_200 = function (res: NextApiResponse, data: any) {
    res.status(statusCode.SUCCESS).json(data);
}
export const res_201 = function (res: NextApiResponse,data: any) {
    res.status(statusCode.CREATED).json(data);
}
export const res_401 = function (res: NextApiResponse,message: string) {
    res.status(statusCode.NOT_FOUND).json({ error: "NOT FOUND", message });
}
export const res_409 = function (res: NextApiResponse,message: string) {
    res.status(statusCode.CONFLICT).json({ error: "CONFLICT", message });
}
export const res_400 = function (res: NextApiResponse,message: string) {
    res.status(statusCode.UNPROCESSABLE).json({ error: "BAD REQUEST", message });
}
export const res_500 = function (res: NextApiResponse,message: string) {
    res.status(statusCode.INTERNAL_SERVER_ERROR).json({ error: "INTERNAL SERVER ERROR", message });
}