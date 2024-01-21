const paymentModel = require("../models/payment")
//service for store payment
const createPayment = async (data) => {
    const payment = await paymentModel.create(data)
    return payment
}
//service for update payment
const updatePayment = async (id, status) => {
    const payment = await paymentModel.updateOne({ orderId: id, paymentStatus: status })
    return payment
}
//service for get payment
const getPayment = async (id) => {
    const payment = await paymentModel.findOne({ orderId: id })
    return payment
}
module.exports = { createPayment, updatePayment, getPayment }