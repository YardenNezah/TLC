import mongoose from 'mongoose';

const associationSchema = {
    bigImage: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    isPopular: {
        type: Boolean,
        default: false
    },
    openingHour: {
        type: String,
        required: true
    },
    closingHour: {
        type: String,
        required: true
    },
    isNewAssociation: {
        type: Boolean,
        default: false
    },
    siteLink: {
        type: String,
        required: true
    },
}

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
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    keywords: [
        {
            type: String,
            required: false
        }
    ],
    associationDetails: {
        type: associationSchema,
        required: false
    }
})


const user = mongoose.model("user", userSchema)

export default user;