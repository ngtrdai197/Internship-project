import { IRole } from './IRole.interface';

export interface IUser {
  _id?: String;
  username: String;
  password: String;
  fullname: String;
  address: String;
  role?: IRole;
}
