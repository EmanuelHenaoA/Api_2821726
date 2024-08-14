const Vehicle = require ('../models/vehicle')

//Metodo GET
const getVehicle = async(req, res) =>{
    const vehicles = await Vehicle.find()
    res.json(vehicles)
}


const putVehicle = async (req, res) =>{
    const {plate, color, model} = req.body
    let msg= 'Vehicle updated'
    try{
        await Vehicle.findOneAndUpdate({plate:plate}, {color: color, model:model})
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}

const deleteVehicle = async(req, res) =>{
    let msg = 'Vehicle deleted'
    id = req.params.id
    try{
        await Vehicle.findByIdAndDelete({_id: id})
    } catch (error){
        msg = 'Problems with delete'
    }
    res.json({msg:msg})
}

//Metodo POST
const postVehicle = async(req, res) =>{
    let msg = 'vehicle inserted'
    const body = req.body
    try{
        const vehicle = new Vehicle(body)
        await vehicle.save() //Insert in database
    } 
    catch(error){
        msg = error
    }
    res.json({msg:msg})
}

module.exports = {
    getVehicle,
    postVehicle,
    putVehicle,
    deleteVehicle
}
