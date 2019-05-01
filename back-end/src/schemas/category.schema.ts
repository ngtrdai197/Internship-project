import * as mongoose from 'mongoose';
export const CategorySchema = new mongoose.Schema({
    categoryname: String,
    products: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }
    ]

})