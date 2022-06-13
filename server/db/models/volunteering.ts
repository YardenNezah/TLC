import mongoose from 'mongoose';

const volunteeringSchema = new mongoose.Schema({
    associationId: {
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
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    keywords: [
        {
            type: String,
            required: true
        }
    ],
    volunteers: [
        {
            type: String,
            required: false
        }
    ]
})


const volunteering = mongoose.model("volunteering", volunteeringSchema)

export default volunteering;