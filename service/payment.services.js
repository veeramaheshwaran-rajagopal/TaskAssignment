const crypto = require("crypto");
const Razorpay = require("razorpay");
const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAYKEYID,
    key_secret: process.env.RAZORPAYSECRET
})
const createOrder = (data) => {
    const order = razorpayInstance.orders.create(data)
    return order;
}
const verifyOrder = (order_id, payment_id) => {
    const HMAC = crypto.createHmac("sha-256", process.env.RAZORPAYSECRET)
    HMAC.update(order_id + '|' + payment_id)
    const signature = HMAC.digest('hex')
    return signature
}
module.exports = { createOrder, verifyOrder }