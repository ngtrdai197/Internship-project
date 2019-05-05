import { Model } from 'mongoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../interfaces/user.interface';
import { CreateUserDto } from 'src/dto/user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async create(createUserDto: CreateUserDto): Promise<Object> {
    const createdUser = new this.userModel(createUserDto);
    const result = createdUser.save();
    if (result) {
      return { message: 'Thêm thành công người dùng' };
    }
    return { message: 'Thêm không thành công. Kiểm tra lại' };
  }

  async update(id: string, updateUserDto: CreateUserDto): Promise<Object> {
    try {
      const result = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
      if (result) {
        return { data: result, message: 'Cập nhật thông tin thành công' };
      }
    } catch (err) {
      throw new HttpException('User not found with id:' + id, HttpStatus.NOT_FOUND);
    }
  }
  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOneById(_id: string): Promise<User> {
    return await this.userModel.findById({ _id }).exec();
  }

  async findOne(username: string): Promise<User> {
    return await this.userModel.findOne({ username }).exec();
  }

  async delete(id: string): Promise<object> {
    const result = await this.userModel.findByIdAndRemove(id).exec();
    if (result) {
      return { message: 'Đã xóa thành công người dùng' };
    }
    return { message: 'Xóa không thành công. Kiểm tra lại' };
  }

}
