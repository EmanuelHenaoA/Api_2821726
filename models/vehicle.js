const {model, Schema} = require('mongoose')

const VehicleSchema = new Schema ({
    plate: {
        type: String,//Tipo de dato
        unique: true,//Unico
        required:[true, 'The plate is required'],//Requerido
        maxlength:[6, 'Max 6 characters'],//Tamaño 6 caracteres
        minlength:[5, 'Min 6 characters']
    },
    color: {
        type:String,
        required:[true, 'The color is required'],
        minlength:[3, 'Min 3 characters']
    },
    model: {
        type: Number,
        required:[true, 'The model is required'],

    },
}
)

module.exports = model('Vehicle', VehicleSchema, 'vehicle') //  Crea la coleccion si no existe y exporta