const paymentModel = require("../models/payment")
const createPayment = async (data) => {
    const payment = await paymentModel.create(data)
    return payment
}
const updatePayment = async (id, status) => {
    const payment = await paymentModel.updateOne({ orderId: id, paymentStatus: status })
    return payment
}
const getPayment = async (id) => {
    const payment = await paymentModel.findOne({ orderId: id })
    return payment
}
module.exports = { createPayment, updatePayment, getPayment }