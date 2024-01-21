const { generateOTP } = require("../../utils/commonFunctions")
const twilio = require('twilio');
const client = twilio(process.env.twilioKEYID, process.env.twilioAUTHTOKEN);
//service for sent otp to specific mobile number
const sendOtp = async (phoneNumber) => {
    // Generate a 6-digit OTP
    const otp = generateOTP()
    // Send SMS using Twilio
    const message = await client.messages.create({
        body: `Your OTP is: ${otp}`,
        from: process.env.twiloNumber,
        to: `+91${phoneNumber}`,
    });
    return message
}
module.exports = { sendOtp }