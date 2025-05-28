import { DataTypes } from "sequelize";
import { database } from '../database/index.js'

export const Palestra = database.define('Palestra', {
    nome: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    telefone: {
        type: DataTypes.STRING
    },
    palestra: {
        type: DataTypes.STRING
    },
    comoConheceu: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
})