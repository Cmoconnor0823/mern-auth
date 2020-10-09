const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Beginning of Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    password: {
        type:String,
        default: Date.now,
        required: true
    }
});

module.exports = User = mongoose.model("users", UserSchema);
