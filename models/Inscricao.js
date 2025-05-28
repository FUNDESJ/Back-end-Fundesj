import { DataTypes } from "sequelize";
import { database } from '../database/index.js'

export const Inscricao = database.define('Inscricao', {
    nome: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    telefone: {
        type: DataTypes.STRING
    },
    titulo: {
        type: DataTypes.STRING
    },
    comoConheceu: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false,
    tableName: 'inscricoes', // nome real da tabela
    underscored: true 
})