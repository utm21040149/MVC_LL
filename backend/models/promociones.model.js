import {Schema, model} from 'mongoose'

export const esquemaPromociones = new Schema({
    promocion:{
        type: Number
    },
    fecha:{
        type: String
    }
 })
 
 export const PromocionesPre = new model ('Promociones', esquemaPromociones)