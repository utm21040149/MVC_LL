import { ClientesPre } from "../models/clientes.model.js";

export const testClientes =() =>{
    console.log('Si funcina la conexión del modelo del clientes')
}

ClientesPre.create({
    name: "Luis"
})