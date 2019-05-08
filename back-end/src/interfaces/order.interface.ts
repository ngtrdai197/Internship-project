
import { Document } from 'mongoose';
import { UserRole } from 'src/user/user-role.enum';
import { OrderDetails } from './order-details.interface';

export interface Order extends Document {
    readonly createdDate: Date;
    readonly payments: String;
    readonly total: Number;
    readonly state_payment: Boolean;
    readonly order_details: String[];
}