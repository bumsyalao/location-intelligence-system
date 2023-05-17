
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IUser } from '../../user/models/user.model';
import { AuthenticatedRequest } from '../types';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.SECRET || '';

export const authenticateJWT = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;


    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, secret, (err: any, decoded: any) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to authenticate token' });
        }

        req.user = decoded as IUser;
        next();
    });
};



interface DecodedToken {
    userId: string;
}

export const decodeToken = (token: string): Promise<DecodedToken | null> => {
    return new Promise((resolve) => {
        jwt.verify(token, secret, (err: any, decoded: any) => {
            if (err || typeof decoded !== 'object' || decoded === null) {
                resolve(null);
            } else {
                const { userId } = decoded as DecodedToken;
                resolve({ userId });
            }
        });
    });
};