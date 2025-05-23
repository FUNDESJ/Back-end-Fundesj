import express from 'express'
import { listarCertificado, adicionarCertificado, pesquisarCertificado, editarCertificado, deletarCertificado } from '../controllers/certificadosControllers.js'
import { criarUsuario, login } from '../controllers/usuariosControllers.js';
import { autenticar } from '../middlewares/authMiddleware.js';
export const router = express.Router()


router.get('/certificado', listarCertificado);
router.get('/certificado/:codigo', pesquisarCertificado );
router.post('/certificado', adicionarCertificado);
router.put('/certificado/:codigo', editarCertificado);
router.delete('/certificado/:codigo', deletarCertificado);

router.post('/usuario', login);
router.post('/usuario', criarUsuario)

router.use(autenticar)