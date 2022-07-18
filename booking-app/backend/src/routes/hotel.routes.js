import {Router} from 'express';
import {create, update, deleteById, findAll} from '../controllers/hotel.controller.js';

const router = Router();

router.post('/', create);
router.get('/', findAll);
router.put('/', update);
router.delete('/', deleteById);

export default router;