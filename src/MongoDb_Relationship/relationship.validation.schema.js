const joi = require("joi")
//validation schema for addUser
const addUserValidationSchema = joi
    .object({
        body: joi.object({
            userName: joi.string().required(),
            profile: joi.string().required()
        }),
    })
    .unknown(true);
const addProfileSchema = joi
    .object({
        body: joi.object({
            fullName: joi.string().required(),
            email: joi.string().required()
        }),
    })
    .unknown(true);
const addAuthorSchema = joi
    .object({
        body: joi.object({
            name: joi.string().required(),
            nationality: joi.string().required()
        }),
    })
    .unknown(true);
const addBookSchema = joi
    .object({
        body: joi.object({
            title: joi.string().required(),
            author: joi.string().required()
        }),
    })
    .unknown(true);
const addStudentSchema = joi
    .object({
        body: joi.object({
            name: joi.string().required(),
        }),
    })
    .unknown(true);
const addCourseSchema = joi
    .object({
        body: joi.object({
            title: joi.string().required(),
        }),
    })
    .unknown(true);
const addStudentToCourseSchema = joi
    .object({
        body: joi.object({
            studentId: joi.string().required(),
            courseId: joi.string().required(),
        }),
    })
    .unknown(true);
module.exports = { addUserValidationSchema, addProfileSchema, addBookSchema, addAuthorSchema, addStudentSchema, addCourseSchema, addStudentToCourseSchema }