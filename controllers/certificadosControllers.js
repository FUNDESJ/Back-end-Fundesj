import { Certificado } from '../models/Certificado.js'

export const listarCertificado = async (req, res) => {
    try {
        const certificados = await Certificado.findAll()
        if (!certificados || certificados.length < 0) {
           return res.status(404).send("Nenhum certificado encontrado")

        }
        res.status(200).send(certificados)
    } catch (erro) {
        console.log("erro", erro)
        res.status(500).send({ "mensagem": erro })
    }
}

export const adicionarCertificado = async (req, res) => {
    const { nome, curso, horas, codigo, link } = req.body;

    try {
        const consulta = await Certificado.findOne({ where: { codigo } });
        if (consulta) return res.status(500).send({ mensagem: "Codigo ja cadastrado" })
        const novoCertificado = await Certificado.create({ nome, curso, horas, codigo, link });
        res.status(201).send({ novoCertificado })
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ "Mensagem": erro });
    }
}
export const pesquisarCertificado = async (req, res) => {
    const { codigo } = req.params;
    try {
        const certificadoEscolhido = await Certificado.findAll({ where: { codigo } })
        if (!certificadoEscolhido) return res.status(404).send("Certificado nao encontrado");

        res.status(200).send(certificadoEscolhido)
    } catch (erro) {
        console.log(erro);
        res.status(404).send({ "Mensagem": erro })
    }
}

export const editarCertificado = async (req, res) => {
    const { codigo } = req.params
    const certificado = await Certificado.findOne({ where: { codigo } })
    if (!certificado) return res.status(404).send({ mensagem: "Certificado não encontrada" })

    await Certificado.update(req.body, { where: { codigo } })
    res.status(200).send({ mensagem: "Atualização feita com sucesso" })
}

export const deletarCertificado = async (req, res) => {
    const { codigo } = req.params;
    try {
        const resposta = await Certificado.findOne({ where: { codigo } });
        if (!resposta) return res.status(404).send({ mensagem: "Certificado nao encontrado" });
        await Certificado.destroy({ where: { codigo } });
        res.status(204).send({ Mensagem: "Linha deletada com sucesso" })
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ "Mensagem": erro })
    }
}
