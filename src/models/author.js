//schema for author
const mongoose = require('mongoose');
const { AUTHOR } = require('../../utils/constants');

const authorSchema = new mongoose.Schema({
    name: String,
    nationality: String,
}, {
    timestamps: true,
    versionKey: false,
},);

const Author = mongoose.model(AUTHOR, authorSchema);

module.exports = Author;
