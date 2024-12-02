import express from 'express';
import {validate} from '../middlewares/validation.middleware.js';

import { userValidationSchema } from '../middlewares/validation.middleware.js';
import { UserController } from '../controllers/user.controller.js';

const router = express.Router();

// Register user (POST request)
router.post('/register', validate(userValidationSchema), UserController.registerUser);

// Login user (POST request)
router.post('/login', UserController.loginUser);

export default router;