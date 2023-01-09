import { Router } from 'express';
import { newCake } from '../controllers/cakes.controllers.js';
import { validateSchema } from '../middlewares/schemaValidation.middleware.js';
import { cakeSchema } from '../models/cakes.schema.js';

const router = Router();

router.post('/cakes', validateSchema(cakeSchema), newCake);

export default router;
