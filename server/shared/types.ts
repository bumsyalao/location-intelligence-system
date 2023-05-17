import { Request } from 'express';
import { IUser } from '../user/models/user.model';

export interface AuthenticatedRequest extends Request {
    user?: IUser;
}

