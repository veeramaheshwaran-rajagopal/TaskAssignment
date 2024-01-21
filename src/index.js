const express = require("express")
const router = express.Router()
const userRoute = require("./facebookLogin/user.route")
const paymentRoute = require("./razorpayIntegration/razorPay.route")
router.use("/user", userRoute)
router.use("/payment", paymentRoute)
module.exports = router