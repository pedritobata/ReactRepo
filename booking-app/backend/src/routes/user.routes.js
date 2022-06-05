import { Router } from "express";
import { getAll } from '../controllers/user.controller.js';

const router = Router();

// get all
router.get('/', getAll);

export default router;