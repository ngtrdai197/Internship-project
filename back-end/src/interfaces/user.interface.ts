    
import { Document } from 'mongoose';
import { UserRole } from 'src/user/user-role.enum';

export interface User extends Document {
  readonly username: string;
  readonly password: number;
  readonly fullname: string;
  readonly address: string;
  readonly role?: UserRole
}