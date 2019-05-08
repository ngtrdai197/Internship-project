import * as mongoose from 'mongoose';
export const CategorySchema = new mongoose.Schema({
    createdDate: {
        type: Date,
        default: new Date(Date.now())
    },
    payments: {
        type: String,
        default: "Nhận tiền khi giao dịch"
    },
    total: {
        type: Number,
        required: true
    },
    state_payment: {
        type: Boolean,
        default: false
    },
    order_details: {
        type: mongoose.Schema.Types.ObjectId, ref: 'OrderDetails',
        required: true
    }
})