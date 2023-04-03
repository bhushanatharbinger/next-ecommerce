import { NextApiRequest, NextApiResponse } from 'next';

export type Next = () => Promise<void>;

export type Middleware<RequestT extends NextApiRequest = NextApiRequest> = (
  req: RequestT,
  res: NextApiResponse,
  next: Next
) => Promise<void>;

async function runMiddlewares<RequestT extends NextApiRequest>(
  req: RequestT,
  res: NextApiResponse,
  middlewares: Middleware<RequestT>[],
  currentMiddlewareIndex: number
) {
  // Check if previous middleware sent a response - if it did we stop execution
  if (res.headersSent) return;

  const next = async () => {
    // Get next middleware, if there is one - if there isn't we stop execution
    const nextMiddleware = middlewares[currentMiddlewareIndex + 1];
    if (!nextMiddleware) return;

    // Recursively run next middleware
    await runMiddlewares(req, res, middlewares, currentMiddlewareIndex + 1);
  };

  // Initializes middleware chain - the next function will
  // recursively run next middleware when called by the current middleware
  await middlewares[currentMiddlewareIndex](req, res, next);
}
export default function use<RequestT extends NextApiRequest>(...middlewares: Middleware<RequestT>[]) {
  return async function internalHandler(req: RequestT, res: NextApiResponse) {
    await runMiddlewares<RequestT>(req, res, middlewares, 0);
  };
}