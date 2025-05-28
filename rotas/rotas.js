import express from 'express'
export const router = express.Router();
import inscricaoRouter from './Inscricao.js';
import certificadoRouter from './Certificado.js';

router.use('/certificado', certificadoRouter);
router.use('/palestras', inscricaoRouter);
