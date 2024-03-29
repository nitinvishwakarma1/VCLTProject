import mongoose from "./connection.js";
const user = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        required: false
    },
    birthyear: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    birthdate: {
        type: String,
        required: false
    },
    contactNumber: {
        type: Number,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"]
    },
    captionlanguage: {
        type: String,
        default: "Hindi",
    },
    spokenlanguage: {
        type: String,
        default: "English"
    }
});

export const usermodel = mongoose.model("user", user);