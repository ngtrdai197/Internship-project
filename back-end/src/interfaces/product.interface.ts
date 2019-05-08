
import { Document } from 'mongoose';

export interface Product extends Document {
    readonly productName: String;
    readonly description?: String;
    readonly title: String;
    readonly current_price: Number;
    readonly old_price?: Number;
    readonly discount?: Number;
    readonly images?: String[];
    readonly category: String;

}