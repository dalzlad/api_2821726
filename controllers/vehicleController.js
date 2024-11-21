import Vehicle from '../models/vehicle.js'

//Method GET
export async function getVehicle(req, res){
    const vehicles = await Vehicle.find()
    res.json({vehicles})
}

//Method GET
export async function getOneVehicle(req, res){
    const {id}= req.params
    const vehicle = await Vehicle.findById(id)
    res.json(vehicle)
}

//Post Create a document in the collection Vehicle
export async function postVehicle(req, res){
    const body = req.body //Get the body send from postman or a form
    let msg = 'Vehicle inserted succesful'
    try {
        const vehicle = new Vehicle(body)//Create the object Vehicle in RAM
        await vehicle.save() //Insert object at the collection
    } catch (error) {
        msg = error
    }
    res.json({msg:msg})
}

export async function putVehicle(req, res){
    const {plate, color, model} = req.body
    let msg = 'Vehicle updated'
    try {
        await Vehicle.findOneAndUpdate({plate:plate}, {color: color, model:model})
    } catch (error) {
        msg = error
    }
    res.json({msg:msg})
}

export async function deleteVehicle(req, res){
    let msg = 'Vehicle deleted'
    id = req.params.id
    try {
        await Vehicle.findByIdAndDelete(id)
    } catch (error) {
        msg = 'There was a problem while deleting'
    }
    res.json({msg:msg})
}