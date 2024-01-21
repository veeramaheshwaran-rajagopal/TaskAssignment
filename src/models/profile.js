//schema for Profile
const mongoose = require('mongoose');
const { PROFILE } = require('../../utils/constants');
const profileSchema = new mongoose.Schema({
    fullName: String,
    email: String
}, {
    timestamps: true,
    versionKey: false,
},);

const Profile = mongoose.model(PROFILE, profileSchema);

module.exports = Profile;
