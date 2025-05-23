import { Usuario } from "../models/Usuario.js";

export const listarUsuario = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        if(!usuarios || usuarios.length === 0){
            return res.status(404).send("Nenhum usuario encontrado")
        }
        res.status(200).send("Deu certo")
    } catch (erro){
        console.log(erro)
        res.status(404).send({"Mensagem": erro})
    }

}

export const criarUsuario = async (req, res) =>{
    const {nome, senha} = req.body;
    try{ 
        const consulta = Usuario.findOne({where : {nome}});
        if(consulta.length > 0) return res.status(500).send({consulta});
        
        const novoUsuario =  await Usuario.create({nome, senha});
        res.status(201).send({novoUsuario});
    } catch(erro){
        console.log(erro);
        res.status(500).send({"Mensagem": erro})
    }
}
