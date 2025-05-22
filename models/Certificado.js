import { DataTypes } from 'sequelize'
import { database } from '../database/index.js'

export const Certificado = database.define('Certificados', {
  nome: {
    type: DataTypes.STRING
  },
  curso: {
    type: DataTypes.TEXT,
  },
  horas: {
    type: DataTypes.INTEGER
  },
  codigo: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Válido'
  },
  link: {
    type: DataTypes.STRING,
  }
}, {
  timestamps: false, 
})
