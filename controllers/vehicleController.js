import Vehicle from '../models/vehicle.js'

//Method GET - All vehicles
export async function getVehicle(req, res) {
    try {
        const vehicles = await Vehicle.find();
        res.json({ vehicles });
    } catch (error) {
        res.status(500).json({ msg: "Error fetching vehicles", error: error.message });
    }
}

//Method GET - One vehicle by id
export async function getOneVehicle(req, res) {
    const { id } = req.params;
    try {
        const vehicle = await Vehicle.findById(id);
        if (!vehicle) {
            return res.status(404).json({ msg: "Vehicle not found" });
        }
        res.json(vehicle);
    } catch (error) {
        res.status(500).json({ msg: "Error fetching vehicle", error: error.message });
    }
}

//Method POST - Create a vehicle
export async function postVehicle(req, res) {
    try {
        const vehicle = new Vehicle(req.body); // objeto en RAM
        await vehicle.save(); // guardar en la colección
        res.status(201).json({ msg: "Vehicle inserted successfully", vehicle });
    } catch (error) {
        res.status(400).json({ msg: "Error inserting vehicle", error: error.message });
    }
}

//Method PUT - Update by id
export async function putVehicle(req, res) {
    const { id } = req.params;
    const { color, model, plate } = req.body;

    try {
        const updatedVehicle = await Vehicle.findByIdAndUpdate(
            id,
            { plate, color, model },
            { new: true, runValidators: true }
        );

        if (!updatedVehicle) {
            return res.status(404).json({ msg: "Vehicle not found" });
        }

        res.json({
            msg: "Vehicle updated successfully",
            vehicle: updatedVehicle
        });
    } catch (error) {
        res.status(500).json({ msg: "Error updating vehicle", error: error.message });
    }
}

//Method DELETE - Delete by id
export async function deleteVehicle(req, res) {
    const { id } = req.params;
    try {
        const deletedVehicle = await Vehicle.findByIdAndDelete(id);
        if (!deletedVehicle) {
            return res.status(404).json({ msg: "Vehicle not found" });
        }
        res.json({ msg: "Vehicle deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: "Error deleting vehicle", error: error.message });
    }
}
