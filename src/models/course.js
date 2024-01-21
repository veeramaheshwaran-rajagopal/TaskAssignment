//schema for courses
const mongoose = require('mongoose');
const { COURSE, STUDENT } = require('../../utils/constants');
const courseSchema = new mongoose.Schema({
    title: String,
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: STUDENT
    }]
}, {
    timestamps: true,
    versionKey: false,
},);

const Course = mongoose.model(COURSE, courseSchema);

module.exports = Course;
