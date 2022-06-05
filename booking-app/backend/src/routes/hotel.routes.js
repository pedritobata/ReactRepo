import {Router} from 'express';
import { create } from '../controllers/hotel.controller.js';

const router = Router();

router.post('/', create);

export default router;