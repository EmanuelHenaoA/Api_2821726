const {model, Schema} = require ('mongoose')

const OwnerSchema = new Schema ({
    id: {
        type: String,
        unique: true,
        required: [true, 'The ID is required'],
        maxlength: [10, 'Max 10 characters'],
        minlength: [4, 'Min 4 characters']
    },
    name: {
        type: String,
        required: [true, 'The name is required'],
        minlength: [3, 'Min 3 characters']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'The email is required']
    }
})

module.exports = model('Owner', OwnerSchema, 'owner')