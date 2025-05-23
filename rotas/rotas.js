import express from 'express'
import { listarCertificado, adicionarCertificado, pesquisarCertificado, editarCertificado, deletarCertificado } from '../controllers/certificadosControllers.js'
import { criarUsuario, login } from '../controllers/usuariosControllers.js';
import { autenticar } from '../middlewares/authMiddleware.js';
export const router = express.Router()


router.post('/usuario/login', login);
router.post('/usuario/criar', criarUsuario);
router.get('/certificado', listarCertificado);
router.get('/certificado/:codigo', pesquisarCertificado);
router.put('/certificado/:codigo', editarCertificado);


router.post('/certificado', autenticar, adicionarCertificado);
router.delete('/certificado/:codigo', autenticar, deletarCertificado);