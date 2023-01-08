import { Router } from 'express';
import { newFlavour } from '../controllers/flavours.controllers.js';

const router = Router();

router.post('/flavours', newFlavour);

export default router;
