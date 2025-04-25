import express from 'express';
import { 
    createRegistroHandler, 
    getRegistros, 
    deleteRegistro, 
    editRegistro, 
    getRegistro 
} from '../controllers/HourController.js';

const router = express.Router();

router.post('/', createRegistroHandler); 
router.get('/', getRegistros); 
router.get('/:id', getRegistro);
router.put('/:id', editRegistro); 
router.delete('/:id', deleteRegistro);


export default router;