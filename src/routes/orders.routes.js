import { Router } from 'express';
import { getOrders, newOrder } from '../controllers/orders.controllers.js';

const router = Router();

router.post('/order', newOrder);

router.get('/orders', getOrders);

export default router;
