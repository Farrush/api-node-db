import {Model, DataTypes, DoubleDataType, BlobDataType} from 'sequelize'
import { sequelize } from '../instances/mysql'

export interface CardapioInstance extends Model {
    id: number,
    nome: string,
    descricao: string,
    valor: DoubleDataType,
    imagem: BlobDataType
}


export const Cardapio = sequelize.define<CardapioInstance>('Cardapio',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING
    },
    descricao:{
        type:DataTypes.STRING
    },
    valor:{
        type:DataTypes.DOUBLE
    },
    imagem:{
        type:DataTypes.BLOB
    }
}, {
    tableName: 'tbprodutos',
    timestamps: false
} )