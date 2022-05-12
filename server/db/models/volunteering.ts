import mongoose from 'mongoose';

const volunteeringSchema = new mongoose.Schema({
    association: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    volunteersQuantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

const volunteering = mongoose.model("volunteering", volunteeringSchema)

export default volunteering;