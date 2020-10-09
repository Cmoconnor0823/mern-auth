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
    }
    
})