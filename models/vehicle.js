import { model, Schema } from 'mongoose'

const VehicleSchema = new Schema({
    plate: {
        type:String,//Tipo dato
        unique:true,//Unico
        required:[true, 'The plate is required'], //Requerido
        maxlength:[6,'Max 6 characters'],//Tamaño máximo
        minlength:[5, 'Min 6 characters'] //Tamaño 6 characters
    },
    color: {
        type:String,//Tipo dato
        required:[true, 'The plate is required'], //Requerido
        minlength:[3, 'Min 3 characters'] //Tamaño 6 characters
    },
    model: {
        type: Number,
        required: [true, 'The model is required']
    }
}  
)

export default model('Vehicle', VehicleSchema, 'vehicle') //Crear la colección sino existe y exporta el modelo