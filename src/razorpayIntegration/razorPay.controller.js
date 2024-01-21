const { createOrder, verifyOrder } = require("../../service/payment.services")
const { sendResponse, errorHandler } = require("../../utils/commonFunctions")
const paymentService = require("./razorPay.service")
const createPayment = async (req, res) => {
    try {
        const {
            body: data,
        } = req;
        const order = await createOrder(data);
        const payment = {
            orderId: order.id,
            paymentStatus: order.status,
            paymentDetails: order,
        };
        const { _id } = await paymentService.createPayment(payment)
        return sendResponse(res, true, 200, 'Order created', { _id, ...order });
    } catch (error) {
        console.log(error)
        return errorHandler(error, res);
    }
};
const verifyPayment = async (req, res) => {
    try {
        const {
            body: { razorpayOrderId, razorpayPaymentId, razorpaySignature },
        } = req;
        const signature = await verifyOrder(razorpayOrderId, razorpayPaymentId);
        if (signature === razorpaySignature) {
            const payment = await paymentService.getPayment(razorpayOrderId)
            if (payment) {
                await paymentService.updatePayment(razorpayOrderId, 'paid')
            }
            return sendResponse(res, true, 200, 'Payment verification success');
        }
        return sendResponse(res, false, 400, 'Payment verification failed.');
    } catch (error) {
        return errorHandler(error.toString(), res);
    }
};
module.exports = { createPayment, verifyPayment }