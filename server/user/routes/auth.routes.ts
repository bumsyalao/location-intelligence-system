import express from 'express';
import { signUp, signIn, signInWithGoogle } from '../controllers/auth.controller';

const router = express.Router();

// Sign up route
router.post('/signup', signUp);

// Sign in route
router.post('/signin', signIn);

// Sign in with Google route
router.post('/google', signInWithGoogle);

export default router;
