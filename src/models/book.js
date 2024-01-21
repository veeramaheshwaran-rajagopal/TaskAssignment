//schema for book
const mongoose = require('mongoose');
const { BOOK, AUTHOR } = require('../../utils/constants');
const bookSchema = new mongoose.Schema({
    title: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: AUTHOR
    }
}, {
    timestamps: true,
    versionKey: false,
},);

const Book = mongoose.model(BOOK, bookSchema);

module.exports = Book;
