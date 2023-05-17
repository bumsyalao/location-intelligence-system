import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.SECRET || '';

import User, { IUser } from '../models/user.model';

// Sign up with email and password
export const signUp = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // Create a new user
        const newUser = new User({
            email,
            password: password,
        });

        await newUser.save();

        return res.status(201).json({ message: 'User signed up successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error });
    }
};

// Sign in with email and password
export const signIn = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        // Compare the provided password with the stored hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1d' });

        return res.json({ token });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error });
    }
};

