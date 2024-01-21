const express = require("express")
const router = express.Router()
const wordToPdfConroller = require("./WordToPdf.controller")
const { validation } = require("../../middleware/validation.middleware")
const fs = require('fs');
const mammoth = require('mammoth');
const { PDFDocument } = require('pdf-lib');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
app.post('/convert', upload.single('wordFile'), wordToPdfConroller.convertWordToPdf)