const authorModel = require("../models/author")
const bookModel = require("../models/book")
const courseModel = require("../models/course")
const profileModel = require("../models/profile")
const studentModel = require("../models/student")
const userModel = require("../models/user")
const { createDocument, getDocuments, getDocument, updateDocument, getDocumentsManyToManyRelationship } = require("./relationship.service")
const { sendResponse, errorHandler } = require("../../utils/commonFunctions")
//controller for add profile
const addProfile = async (req, res) => {
    try {
        const { body: data } = req
        const profile = await getDocument(profileModel, { fullName: data.fullName })
        if (profile)
            return sendResponse(res, false, 200, "Profile Already Exist..")
        await createDocument(profileModel, data)
        return sendResponse(res, true, 200, "Profile Created")
    }
    catch (error) {
        errorHandler(error, res)
    }
}
//controller for add new user
const addUser = async (req, res) => {
    try {
        const { body: data } = req
        const user = await getDocument(userModel, { userName: data.userName })
        if (user)
            return sendResponse(res, false, 200, "user Already Exist..")
        await createDocument(userModel, data)
        return sendResponse(res, true, 200, "User Created")
    }
    catch (error) {
        errorHandler(error, res)
    }
}
//controller for add new author
const addAuthor = async (req, res) => {
    try {
        const { body: data } = req
        const author = await getDocument(authorModel, { name: data.name })
        if (author)
            return sendResponse(res, false, 200, "author Already Exist..")
        await createDocument(authorModel, data)
        return sendResponse(res, true, 200, "Author Created")
    }
    catch (error) {
        errorHandler(error, res)
    }
}
//controller for add book
const addBook = async (req, res) => {
    try {
        const { body: data } = req
        const book = await getDocument(bookModel, { title: data.title })
        if (book)
            return sendResponse(res, false, 200, "book Already Exist..")
        await createDocument(bookModel, data)
        return sendResponse(res, true, 200, "Book Created")
    }
    catch (error) {
        errorHandler(error, res)
    }
}
//controller for add new course
const addCourse = async (req, res) => {
    try {
        const { body: data } = req
        const course = await getDocument(courseModel, { title: data.title })
        if (course)
            return sendResponse(res, false, 200, "course Already Exist..")
        await createDocument(courseModel, data)
        return sendResponse(res, true, 200, "Course Created")
    }
    catch (error) {
        errorHandler(error, res)
    }
}
//controller for add new sudent
const addStudent = async (req, res) => {
    try {
        const { body: data } = req
        const student = await getDocument(studentModel, { name: data.name })
        if (student)
            return sendResponse(res, false, 200, "Student Already Exist..")
        await createDocument(studentModel, data)
        return sendResponse(res, true, 200, "Student Created")
    }
    catch (error) {
        errorHandler(error, res)
    }
}
//controller for assign a course to student
const addStudentToCourse = async (req, res) => {
    try {
        const { body: data } = req
        const student = await getDocument(studentModel, { "courses._id": data.courseId })
        if (student)
            return sendResponse(res, false, 200, "student Already Exist In This Course..")
        await updateDocument(studentModel, { _id: data.studentId }, { $push: { courses: data.courseId } })
        await updateDocument(courseModel, { _id: data.courseId }, { $push: { students: data.studentId } })
        return sendResponse(res, true, 200, "Course Assigned")
    }
    catch (error) {
        errorHandler(error, res)
    }
}
//controller for one to one relationship between profile and user models
const oneToOneRelationship = async (req, res) => {
    try {
        const getUsers = await getDocuments(userModel, {}, {}, "profile", {})
        return sendResponse(res, true, 200, "users Available", getUsers)
    }
    catch (error) {
        errorHandler(error, res)
    }
}
//controller for one to Many relationship between author and book models
const oneToManyRelationship = async (req, res) => {
    try {
        const Books = await getDocuments(bookModel, {}, {}, "author", {})
        return sendResponse(res, true, 200, "Books Available", Books)
    }
    catch (error) {
        errorHandler(error, res)
    }
}
//controller for Many to Many relationship between students and courses models
const ManyToManyRelationship = async (req, res) => {
    try {
        const getUsers = await getDocumentsManyToManyRelationship(studentModel, {}, {}, "courses", {}, "students")
        return sendResponse(res, true, 200, "users Available", getUsers)
    }
    catch (error) {
        errorHandler(error, res)
    }
}
module.exports = { addUser, addProfile, addStudent, addBook, addAuthor, addCourse, oneToOneRelationship, oneToManyRelationship, ManyToManyRelationship, addStudentToCourse, getDocumentsManyToManyRelationship }