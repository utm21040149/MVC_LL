import { PromocionesPre } from "../models/promociones.model.js";

export const testPromociones = () =>{
    console.log('Si funcina la conexion del modelo de Productos TRAKAAA HDSPM')
}

PromocionesPre.create({
    promocion: 10,
    fecha: "20 Noviembre"
})