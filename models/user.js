const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim:true,
        unique: 1 //true
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type:String,
        maxlength: 50
    },
    role:{
        type: Number,
        default: 0
    },
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = { User }