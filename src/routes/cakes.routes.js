import { Router } from 'express';
import { newCake } from '../controllers/cakes.controllers.js';

const router = Router();

router.post('/cakes', newCake);

export default router;
