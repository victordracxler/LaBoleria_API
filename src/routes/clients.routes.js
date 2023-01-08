import { Router } from 'express';
import { newClient } from '../controllers/clients.controllers.js';

const router = Router();

router.post('/clients', newClient);

export default router;
