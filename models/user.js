import {Schema, model} from 'mongoose'

const userSchema = new Schema({
    email: {
        type: String,
        required: [true,'Email is required'],
        unique: [true,'Email already exists'],
        minlength:[10,'Min length 10 characters']
    },
    password: {
        type: String,
        required: [true,'Password is required'],
        minlength:[10,'Min length 10 characters']
    }
},
{
    timestamps: true,//To audit. Save the type and time the transaction
    versionKey: false
}
)

export default model('User', userSchema) 