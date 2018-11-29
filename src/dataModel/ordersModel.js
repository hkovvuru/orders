import { Schema } from 'mongoose';
import mongoose from '../dbConfig/dbConnection';

const orderSchema = new Schema({
    orderId: {
        type: Number,
    },
    orderName: {
        type: String,
    },
    orderQuantity: {
        type: Number,
    },
    orderStatus: {
        type: String,
    },
    orderDate: {
        type: Date,
        default: '27-Nov-2018',
    },
});

const orderModel = mongoose.model('order', orderSchema);

export default orderModel;
