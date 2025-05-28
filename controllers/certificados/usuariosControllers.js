import jwt from 'jsonwebtoken';

import { Usuario } from "../../models/Usuario.js";

export const login = async (req, res) => {
    try {
        const {nome, senha} = req.body;
        const usuario = await Usuario.findOne({where: {nome}})
        
        if(!usuario || usuario.senha !== senha) {
            return res.status(401).send({mensagem: "Credenciais invalidas"});

        }
        const token = jwt.sign({id: usuario.id}, process.env.SEGREDO_JWT, {expiresIn: '1h'})
        res.status(200).send({token, nome: usuario.nome,
            senha: usuario.senha
        })
    } catch(erro){

    }
}

export const criarUsuario = async (req, res) =>{
    const {nome, senha} = req.body;
    try{ 
        const consulta = Usuario.findOne({where : {nome}});
        if(consulta.length > 0) return res.status(500).send({consulta});
        
        const novoUsuario =  await Usuario.create({nome, senha});
        const token = jwt.sign({id: novoUsuario.id}, process.env.SEGREDO_JWT, {expiresIn: '1h'})

        res.status(201).send({token,
            nome: novoUsuario.nome,
            senha: novoUsuario.senha
        });
    } catch(erro){
        console.log(erro);
        res.status(500).send({"Mensagem": erro})
    }
}
