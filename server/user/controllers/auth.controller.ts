import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';

import User, { IUser } from '../models/user.model';

// Google OAuth configuration
const googleClientId = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your actual Google Client ID
const googleClient = new OAuth2Client(googleClientId);

// Sign up with email and password
export const signUp = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            email,
            password: hashedPassword,
        });

        await newUser.save();

        return res.status(201).json({ message: 'User signed up successfully' });
    } catch (error) {
        console.error('Error signing up:', error);
        return res.status(500).json({ message: 'Internal server error' });
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
        const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1d' });

        return res.json({ token });
    } catch (error) {
        console.error('Error signing in:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

// Sign in with Google OAuth
export const signInWithGoogle = async (req: Request, res: Response) => {
    const { idToken } = req.body;

    try {
        // Verify the Google ID token
        const ticket = await googleClient.verifyIdToken({
            idToken,
            audience: googleClientId,
        });

        const { email } = ticket.getPayload() as { email: string };

        // Check if user exists
        let user = await User.findOne({ email });

        if (!user) {
            // Create a new user if it doesn't exist
            user = new User({ email });
            await user.save();
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1d' });

        return res.json({ token });
    } catch (error) {
        console.error('Error signing in with Google:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
