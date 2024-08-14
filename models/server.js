const express = require('express')
const dbConnect = require('../database/config')
require('../database/config')
const {getVehicle, postVehicle, putVehicle, deleteVehicle} = require('../controllers/vehicleController')
const {getOwner, postOwner} = require('../controllers/ownerController')

class Server{

    constructor(){
        this.app = express()
        this.listen()
        this.dbConnection()
        this.pathVehicle = '/api/vehicle'
        this.pathOwner = '/api/owner'
        this.route()
    }

    async dbConnection(){ //Call connect to database
        await dbConnect()
    }

route(){
    this.app.use(express.json())
    this.app.get(this.pathVehicle, getVehicle)
    this.app.post(this.pathVehicle, postVehicle)
    this.app.put(this.pathVehicle, putVehicle)
    this.app.delete(this.pathVehicle+'/:id', deleteVehicle)

    this.app.get(this.pathOwner, getOwner)
    this.app.post(this.pathOwner, postOwner)
}

    listen(){
        this.app.listen(process.env.PORT, () =>{
            console.log('Server is running')
        })
    }
}

module.exports = Server//Export the class Server