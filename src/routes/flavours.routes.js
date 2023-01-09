import { Router } from 'express';
import { newFlavour } from '../controllers/flavours.controllers.js';
import { validateSchema } from '../middlewares/schemaValidation.middleware.js';
import { flavourSchema } from '../models/flavours.schema.js';

const router = Router();

router.post('/flavours', validateSchema(flavourSchema), newFlavour);

export default router;
