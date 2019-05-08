import * as mongoose from 'mongoose';
export const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    current_price: {
        type: Number,
        required: true
    },
    description: String,
    old_price: Number,
    discount: Number,
    images: [{
        type: String
    }],
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category',
        required: true
    }


})