//schema for studentss
const mongoose = require('mongoose');
const { STUDENT, COURSE } = require('../../utils/constants');
const studentSchema = new mongoose.Schema({
    name: String,
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: COURSE
    }]
}, {
    timestamps: true,
    versionKey: false,
},);

const Student = mongoose.model(STUDENT, studentSchema);

module.exports = Student;
