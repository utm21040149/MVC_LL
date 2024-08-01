import {Schema, model} from 'mongoose'

const esquemaProductos = new Schema({
    objeto:{
        type: String
    },
    modelo:{
        type: String
    }
 })
 

export const ProductosPre = new model ('Flores', esquemaProductos)