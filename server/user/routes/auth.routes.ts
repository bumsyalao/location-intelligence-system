import { signUp, signIn } from '../controllers/auth.controller';
import { Router } from 'express';

const router = Router();


// Sign up route
router.post('/signup', signUp);

// Sign in route
router.post('/signin', signIn);

// Sign in with Google route
// router.post('/google', signInWithGoogle);

export default router;
