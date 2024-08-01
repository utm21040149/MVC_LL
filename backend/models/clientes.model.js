import {Schema, model} from 'mongoose'

export const esquema = new Schema({
    name:{
        type: String
    }
 })
 

export const ClientesPre = new model ('Clientes', esquema)