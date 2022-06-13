import mongoose from 'mongoose';

const founderSchema = new mongoose.Schema({
    founderName: {
        type: String,
        required: true
    },
    founderDescription: {
        type: String,
        required: true
    },
    founderImage: {
        type: String,
        required: true,
    },
    founderLinkedin: {
        type: String,
        required: true,
    },
    founderEmail: {
        type: String,
        required: true,
    },
    founderAge: {
        type: Number,
        required: true,
    }
})

const founder = mongoose.model("founder", founderSchema)

export default founder;