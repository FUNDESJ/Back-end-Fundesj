import { DataTypes } from "sequelize";
import {database} from '../database/index.js'

export const Usuario = database.define('Usuario', {
    nome: {
        type: DataTypes.STRING
    },
    senha: {
        type: DataTypes.STRING
    }
 
}, {
    timestamps: false
})