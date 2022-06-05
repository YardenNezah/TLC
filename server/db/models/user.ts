import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: "user"
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const user = mongoose.model("user", userSchema)

export default user;