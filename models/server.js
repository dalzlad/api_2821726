import express, { json } from 'express'
import dbConnect from '../database/config.js'
import '../database/config.js'
import vehicleRouter from '../routes/vehicleRoute.js'
import userRouter from '../routes/userRoute.js'
import authRouter from '../routes/authRouth.js'
import cors from 'cors'

class Server{

    constructor(){
        this.app = express()
        this.listen()
        this.dbConnection()
        this.pathVehicle = '/api/vehicle'
        this.route()
    }

    async dbConnection() {
        await dbConnect() //LLamar al método conectar
    }

    route(){
        this.app.use(json());
        this.app.use( cors() );
        /*this.app.get(this.pathVehicle, getVehicle)
        this.app.put(this.pathVehicle, putVehicle)
        this.app.delete(this.pathVehicle+'/:id', deleteVehicle)*/
        this.app.use(this.pathVehicle, vehicleRouter)
        this.app.use('/api/User', userRouter)
        this.app.use('/login', authRouter)
    }

    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log('Server is running')
        })
    }
}

export default Server //Exportar la clase server

//Tarea: crear un proyecto que se permita conectar al servidor de 



/*
Crear un nuevo proyecto para una API REST que permita registrar los datos de un empleado. 
los datos son:
Numero Documento, Nombres, Fecha Ingreso, Fecha Retiro, Salario, DiasLaborados, Cesantias.

Los dias laborados deben ser calculados en la api.
Las Cesantias se calculan en el método POST y corresponden a la formula:
Salario * DiasLaborados / 360



*/