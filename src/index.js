const express = require("express")
const router = express.Router()
// Import route modules
const userRoute = require("./facebookLogin/user.route")
const paymentRoute = require("./razorpayIntegration/razorPay.route")
const WordToPdfRoute = require("./convertWordToPdf/WordToPdf.route")
const otpRoute = require("./sentOtp/otp.route")
const promiseHandlingRoute = require("./PromiseHandling/promiseHandling.route")
const relationshipRoute = require("./MongoDb_Relationship/relationship.route")
// Use the route modules
router.use("/user", userRoute)
router.use("/payment", paymentRoute)
router.use("/WordToPdf", WordToPdfRoute)
router.use("/otp", otpRoute)
router.use("/promiseHandling", promiseHandlingRoute)
router.use("/relationship", relationshipRoute)
module.exports = router