import { Router } from 'express';
import { 
    getVehicle, 
    getOneVehicle, 
    postVehicle, 
    putVehicle, 
    deleteVehicle 
} from '../controllers/vehicleController.js';

const vehicleRouter = Router();

// Rutas CRUD
vehicleRouter.get('/', getVehicle);          // Obtener todos
vehicleRouter.get('/:id', getOneVehicle);    // Obtener uno por id
vehicleRouter.post('/', postVehicle);        // Crear
vehicleRouter.put('/:id', putVehicle);       // Actualizar por id
vehicleRouter.delete('/:id', deleteVehicle); // Eliminar por id

export default vehicleRouter;
