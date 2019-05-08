
import { Document } from 'mongoose';
import { UserRole } from 'src/user/user-role.enum';

export interface User extends Document {
  readonly username: String;
  readonly password: Number;
  readonly fullname: String;
  readonly phone: String;
  readonly address: String;
  readonly email: String;
  readonly role?: UserRole,
  readonly order_details?: String[]
}