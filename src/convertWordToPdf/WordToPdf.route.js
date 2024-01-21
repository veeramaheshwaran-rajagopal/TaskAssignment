const express = require("express")
const router = express.Router()
const wordToPdfConroller = require("./WordToPdf.controller")
const multer = require("multer")
// Multer disk storage configuration
const storage = multer.diskStorage({
    destination: (req, file, done) => {
        done(null, "public")
    },
    filename: (req, file, done) => {
        done(null, file.originalname)
    }
});
// Multer middleware for file uploads
const upload = multer({ storage: storage });
// Endpoint for converting Word to PDF
router.post('/convert', upload.single('wordFile'), wordToPdfConroller.convertWordToPdf)
// Export the router for use in other parts of the application
module.exports = router