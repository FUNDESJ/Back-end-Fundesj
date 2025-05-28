import { Inscricao } from "../../models/Inscricao.js";

export const inscrever = async (req, res) => {
    const { nome, email, telefone, titulo, comoConheceu } = req.body;
    try {
        const consulta = await Inscricao.findOne({ where: { nome, titulo } })
        if(consulta) return res.status(500).send({Mensagem: "Usuario ja cadastrado nesta palestra"})
        
        const novaInscricao = await Inscricao.create({
            nome,
            email,
            telefone,
            titulo,
            comoConheceu
        })

        return res.status(201).send({Mensagem: "Incrição concluida com sucesso!"})
        } catch (erro) {
            return res.status(500).send({"Mensagem": erro})
    }

}

export const listarInscritos = async(req, res) =>{
    const lista = await Inscricao.findAll();
    try{
    if(!lista) return res.status(404).send({Mensagem: "Nenhum inscrito encontrado!"});

    return res.status(200).send({Incrições: lista})
    } catch(erro){
        return res.status(500).send({"Mensagem": erro})
    }
}
export const buscarInscritos = async(req, res) =>{
    const {titulo} = req.params; 
    try{
        const consulta = await Inscricao.findAll({where: titulo})
        if(!consulta) return res.status(404).send({Mensagem: "Palestra nao encontrada"})
        
        res.status(200).send(consulta)
    } catch(erro){
        return res.status(500).send({"Mensagem": erro})
    }

}