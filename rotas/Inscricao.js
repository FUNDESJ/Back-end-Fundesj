import express from 'express';
import { inscrever, listarInscritos, buscarInscritos } from '../controllers/palestras/InscricaoControllers.js'
const router = express.Router();

router.post('/inscrever', inscrever);
router.get('/lista', listarInscritos);
router.get('/lista/:titulo', buscarInscritos);

export default router