import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
    verified: {
        type: Boolean,
        required: true
    }

}, {
    timestap: true
});

const User = mongoose.model("User", userSchema)

export default User;
