import {Router} from 'express'
import { getVehicle, postVehicle, putVehicle, deleteVehicle } from '../controllers/vehicleController.js'

const vehicleRouter = Router()

vehicleRouter.get('/',getVehicle )
vehicleRouter.post('/',postVehicle )
vehicleRouter.put('/',putVehicle )
vehicleRouter.delete('/:id',deleteVehicle )

export default vehicleRouter



