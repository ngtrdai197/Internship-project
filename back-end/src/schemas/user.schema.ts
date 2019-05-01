import * as mongoose from 'mongoose';
import { UserRole } from 'src/user/user-role.enum';

export const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  fullname: String,
  address: String,
  role: String
});