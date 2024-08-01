import { EmpleadosPre } from "../models/empleados.model.js";

export const testEmpleados = () =>{
    console.log("Si funcina la conexión del modelo del empleados")
}

EmpleadosPre.create({
    name:"Ruelas"
})