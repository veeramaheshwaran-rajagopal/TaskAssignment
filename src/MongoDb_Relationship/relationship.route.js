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
//route for one to one relationship
router.get("/oneToOneRelationship", controller.oneToOneRelationship)
//route for one to many relationship
router.get("/oneToManyRelationship", controller.oneToManyRelationship)
//route for many to many relationship
router.get("/ManyToManyRelationship", controller.ManyToManyRelationship)
// Export the router for use in other parts of the application
module.exports = router