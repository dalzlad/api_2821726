const Vehicle = require('../models/vehicle')

//Method GET
const getVehicle = async(req, res) => {
    const vehicles = await Vehicle.find()
    res.json(vehicles)
}


const putVehicle = async(req, res) => {
    const {plate, color, model} = req.body
    let msg = 'Vehicle updated'
    try {
        await Vehicle.findOneAndUpdate({plate:plate}, {color: color, model:model})
    } catch (error) {
        msg = error
    }
    res.json({msg:msg})
}

const deleteVehicle = async(req, res) =>{
    let msg = 'Vehicle deleted'
    id = req.params.id
    try {
        await Vehicle.findByIdAndDelete({_id: id})
    } catch (error) {
        msg = 'There was a problem while deleting'
    }
    res.json({msg:msg})
}

module.exports = {
    getVehicle,
    putVehicle,
    deleteVehicle
}