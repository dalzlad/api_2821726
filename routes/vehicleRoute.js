import {Router} from 'express'
import { getVehicle, getOneVehicle, postVehicle, putVehicle, deleteVehicle } from '../controllers/vehicleController.js'

const vehicleRouter = Router()

vehicleRouter.get('/',getVehicle )
vehicleRouter.get('/:id',getOneVehicle)
vehicleRouter.post('/',postVehicle )
vehicleRouter.put('/',putVehicle )
vehicleRouter.delete('/:id',deleteVehicle )

export default vehicleRouter



