import express from 'express'
import { listarCertificado, adicionarCertificado, pesquisarCertificado, editarCertificado, deletarCertificado } from '../controllers/certificadosControllers.js'

export const router = express.Router()

router.get('/certificado', listarCertificado);
router.get('/certificado/:codigo', pesquisarCertificado );
router.post('/certificado', adicionarCertificado);
router.put('/certificado/:codigo', editarCertificado);
router.delete('/certificado/:codigo', deletarCertificado);

