import { Router } from 'express';
import {
	getOrders,
	getOrdersById,
	newOrder,
	updateDelivered,
} from '../controllers/orders.controllers.js';
import {
	validateSchema,
	validateId,
} from '../middlewares/schemaValidation.middleware.js';
import { orderSchema, idSchema } from '../models/orders.schema.js';

const router = Router();

router.post('/order', validateSchema(orderSchema), newOrder);

router.get('/orders', getOrders);

router.get('/orders/:id', validateId(idSchema), getOrdersById);

router.patch('/order/:id', validateId(idSchema), updateDelivered);

export default router;
