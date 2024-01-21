const express = require("express")
const router = express.Router()
const paymentConroller = require("./razorPay.controller")
const { validation } = require("../../middleware/validation.middleware")
const { createPaymentValidation, verifyPaymentValidation } = require("./validation.schema")
//route for create order
router.post("/createOrder", validation(createPaymentValidation), paymentConroller.createPayment)
//route for verify order
router.post("/verifyOrder", validation(verifyPaymentValidation), paymentConroller.verifyPayment)
// Export the router for use in other parts of the application
module.exports = router