import { Schema } from 'mongoose';
import mongoose from '../dbConfig/dbConnection';

const orderSchema = new Schema({
  orderID: {
    type: Number,
  },
  orderName: {
    type: String,
  },
  orderQuantity: {
    type: Number,
  },
  orderDate: {
    type: date,
    default: '27-Nov-2018',
  },
});

const orderModel = mongoose.model('order', orderSchema);

export default orderModel;
