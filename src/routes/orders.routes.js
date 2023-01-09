import { Router } from 'express';
import {
	getOrders,
	getOrdersById,
	newOrder,
	updateDelivered,
} from '../controllers/orders.controllers.js';

const router = Router();

router.post('/order', newOrder);

router.get('/orders', getOrders);

router.get('/orders/:id', getOrdersById);

router.patch('/order/:id', updateDelivered);

export default router;
