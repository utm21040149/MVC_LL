import { ProductosPre } from "../models/productos.model.js";

export const testProductos =() =>{
    console.log('Si funcina la conexion del modelo de Productos TRAKAAA')
}

ProductosPre.create({
    objeto: "Laptop",
    modelo: "Omen"
})