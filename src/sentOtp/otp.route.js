const express = require("express")
const router = express.Router()
const { validation } = require("../../middleware/validation.middleware")
const { otpValidationSchema } = require("./otp.validation.schema")
const { sendOtp } = require("./otp.controller")
//route for send otp
router.post("/sendOtp", validation(otpValidationSchema), sendOtp)
// Export the router for use in other parts of the application
module.exports = router