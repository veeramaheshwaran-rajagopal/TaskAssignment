//schema for user
const mongoose = require('mongoose');
const { USER } = require('../../utils/constants');
const userSchema = new mongoose.Schema({
    userName: String,
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profile'
    }
}, {
    timestamps: true,
    versionKey: false,
},);

const User = mongoose.model(USER, userSchema);

module.exports = User;
