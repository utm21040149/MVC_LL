import { esquema } from "./clientes.model.js";
import {model} from 'mongoose'

export const EmpleadosPre = new model('Empleados', esquema)