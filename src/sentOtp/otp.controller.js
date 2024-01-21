const { sendResponse, errorHandler } = require("../../utils/commonFunctions")
const otpService = require("./otp.service")
//controller for generate otp
const sendOtp = async (req, res) => {
    try {
        const { body: { phoneNumber } } = req
        await otpService.sendOtp(phoneNumber)
        return sendResponse(res, true, 200, "otp Sent successfully")
    }
    catch (error) {
        errorHandler(error, res)
    }
}
module.exports = { sendOtp }