
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { IUser } from '../models/user.model';

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, 'secret', (err: any, decoded: any) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to authenticate token' });
        }

        req.user = decoded as IUser;
        next();
    });
};