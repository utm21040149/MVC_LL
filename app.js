import mongoose from 'mongoose'; 
import express from 'express'; 
import cors from 'cors';
import dotenv from 'dotenv'; 
import { testClientes } from './backend/controllers/clientes.controller.js';
import { testEmpleados } from './backend/controllers/empleados.controller.js';
import { testGerentes } from './backend/controllers/gerentes.controller.js';
import { testProductos } from './backend/controllers/productos.controller.js';
import {testPromociones} from './backend/controllers/promociones.controller.js';

dotenv.config();
mongoose.connect(process.env.url) 
.then (()=> {
    console.log("Si jalo, pues a seguirle")
})
.catch((error)=>{
    console.log ("No jalo y pues ya es hora de dormir")
})
const app =express();
app.use (cors());

app.listen(4005,()=>{ 
    console.log ('Funciona mi servidor')
})

testClientes()
testEmpleados()
testGerentes()
testProductos()
testPromociones()
test()