const express = require("express")
const router = express.Router()
const controller = require("./relationship.controller")
const { validation } = require("../../middleware/validation.middleware")
const validationSchema = require("./relationship.validation.schema")
//route for addprofile
router.post("/addProfile", validation(validationSchema.addProfileSchema), controller.addProfile)
//route for add user
router.post("/addUser", validation(validationSchema.addUserValidationSchema), controller.addUser)
//route for add author
router.post("/addAuthor", validation(validationSchema.addAuthorSchema), controller.addAuthor)
//route for add book
router.post("/addBook", validation(validationSchema.addBookSchema), controller.addBook)
//route for add student
router.post("/addStudent", validation(validationSchema.addStudentSchema), controller.addStudent)
//route for add course
router.post("/addCourse", validation(validationSchema.addCourseSchema), controller.addCourse)
//route for add assign course
router.post("/assignCourse", validation(validationSchema.addStudentToCourseSchema), controller.addStudentToCourse)
router.get("/oneToOneRelationship", controller.oneToOneRelationship)
router.get("/oneToManyRelationship", controller.oneToManyRelationship)
router.get("/ManyToManyRelationship", controller.ManyToManyRelationship)
// router.post("/addProfile", validation(validationSchema), controller.addProfile)
// router.post("/addProfile", validation(validationSchema), controller.addProfile)
// router.post("/addProfile", validation(validationSchema), controller.addProfile)
module.exports = router