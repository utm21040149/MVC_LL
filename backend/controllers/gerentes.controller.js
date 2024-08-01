import { GerentePre } from "../models/gerentes.model.js";

export const testEmpleados = () =>{
    console.log("Si funcina la conexión del modelo del Gerentes")
}

GerentePre.create({
    name:"Fernando"
})