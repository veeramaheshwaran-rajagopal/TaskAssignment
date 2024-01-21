const joi = require("joi")
//validation schema for send otp
const otpValidationSchema = joi
    .object({
        body: joi.object({
            phoneNumber: joi.number().required()
        }),
    })
    .unknown(true);
module.exports = { otpValidationSchema }