import { Router } from "express";
import { getAll, register } from '../controllers/user.controller.js';

const router = Router();

router.get('/', getAll);
router.post('/', register);

export default router;