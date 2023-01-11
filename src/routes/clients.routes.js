import { Router } from 'express';
import {
	getOrdersByClient,
	newClient,
} from '../controllers/clients.controllers.js';
import {
	validateId,
	validateSchema,
} from '../middlewares/schemaValidation.middleware.js';
import { clientSchema } from '../models/clients.schema.js';
import { idSchema } from '../models/orders.schema.js';

const router = Router();

router.post('/clients', validateSchema(clientSchema), newClient);

router.get('/clients/:id/orders', validateId(idSchema), getOrdersByClient);

export default router;
