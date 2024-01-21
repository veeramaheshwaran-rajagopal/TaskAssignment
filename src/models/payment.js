const { model, Schema } = require('mongoose');
const { PAYMENT } = require('../../utils/constants');
const paymentSchema = new Schema(
    {
        orderId: { type: String },
        paymentDetails: { type: Object },
        paymentStatus: { type: String, enum: ['created', 'captured', 'paid'], default: 'created' },
        isActive: { type: Boolean, required: true, default: true },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);
module.exports = model(PAYMENT, paymentSchema);
