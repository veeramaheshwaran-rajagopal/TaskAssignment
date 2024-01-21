const joi = require("joi")
const createPaymentValidation = joi
    .object({
        body: joi.object({
            amount: joi.number().required(),
            currency: joi.string().strict().required(),
            receipt: joi.string().strict().required(),
            notes: joi.object().optional(),
        }),
    })
    .unknown(true);
const verifyPaymentValidation = joi
    .object({
        headers: joi.object({
            razorpaySignature: joi.string().required(),
        }),
        body: joi.object({
            orderId: joi.number().required(),
            paymentId: joi.string().strict().required(),
        }),
    })
    .unknown(true);
module.exports = { createPaymentValidation, verifyPaymentValidation }