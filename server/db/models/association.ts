import mongoose from 'mongoose';

const associationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    field: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    targetAudience: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobileImage: {
        type: String,
        required: true,
    },
    desktopImage: {
        type: String,
        required: true,
    },
    bigImage: {
        type: String,
        required: true,
    },
    isPopular: {
        type: Boolean,
        required: true,
    },
    openingHour: {
        type: String,
        required: true,
    },
    closingHour: {
        type: String,
        required: true,
    },
    isNewAssociation: {
        type: Boolean,
        required: true,
    }
})


const association = mongoose.model("associations", associationSchema);

export default association;

