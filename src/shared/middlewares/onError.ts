import { AppError } from "@shared/infra/errors/AppError";
import { NextApiRequest, NextApiResponse } from "next";

export default async function onError(
    error: AppError,
    req: NextApiRequest,
    res: NextApiResponse,
    next: () => void,
) {

    if (error instanceof AppError) {
        res.status(error.statusCode).json({
            status: error.statusCode,
            message: error.message
        });
    } else {
        res.status(500).end('Internal server error', error);
    }

    next();
}