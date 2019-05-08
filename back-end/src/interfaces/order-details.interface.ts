    
import { Document } from 'mongoose';
import { UserRole } from 'src/user/user-role.enum';

export interface OrderDetails extends Document {
  readonly product: String;
  readonly order: String;
  readonly user: String;
  readonly quantity: Number;
}