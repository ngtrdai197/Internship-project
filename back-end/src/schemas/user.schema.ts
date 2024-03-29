import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "User"
  },
  address: String,
  order_details: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'OrderDetails' }
  ]
});