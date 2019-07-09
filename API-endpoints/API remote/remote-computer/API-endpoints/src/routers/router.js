
import express from 'express';
import signUp from '../controllers/signUp';

const router = express.Router();
router.post('/auth/signup',signUp);
router.post('/property',postProperty);
export default router;
