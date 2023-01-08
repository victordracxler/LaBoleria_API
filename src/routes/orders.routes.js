import { Router } from 'express';
import { newOrder } from '../controllers/orders.controllers.js';

const router = Router();

router.post('/order', newOrder);

export default router;
