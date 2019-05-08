
import { Document } from 'mongoose';

export interface Category extends Document {
    readonly categoryName: String;
    readonly products?: String[];
}