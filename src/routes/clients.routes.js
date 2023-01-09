import { Router } from 'express';
import { newClient } from '../controllers/clients.controllers.js';
import { validateSchema } from '../middlewares/schemaValidation.middleware.js';
import { clientSchema } from '../models/clients.schema.js';

const router = Router();

router.post('/clients', validateSchema(clientSchema), newClient);

export default router;
