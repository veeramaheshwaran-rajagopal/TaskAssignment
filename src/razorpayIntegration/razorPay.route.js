const express = require("express")
const router = express.Router()
const paymentConroller = require("./razorPay.controller")
const { validation } = require("../../middleware/validation.middleware")
const { createPaymentValidation, verifyPaymentValidation } = require("./validation.schema")
router.post("/createOrder", validation(createPaymentValidation), paymentConroller.createPayment)
router.post("/verifyOrder", validation(verifyPaymentValidation), paymentConroller.verifyPayment)
module.exports = router