import express from 'express'
import { listarCertificado, adicionarCertificado, pesquisarCertificado, editarCertificado, deletarCertificado } from '../controllers/certificadosControllers.js'
import { criarUsuario, listarUsuario } from '../controllers/usuariosControllers.js';
export const router = express.Router()


router.get('/certificado', listarCertificado);
router.get('/certificado/:codigo', pesquisarCertificado );
router.post('/certificado', adicionarCertificado);
router.put('/certificado/:codigo', editarCertificado);
router.delete('/certificado/:codigo', deletarCertificado);

router.get('/usuario', listarUsuario);
router.post('/usuario', criarUsuario)