import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interface/jwt-payload.interface';
import { UsersService } from 'src/user/user.service';
import { Login } from 'src/interfaces/login.interface';
import { User } from 'src/interfaces/user.interface';

@Injectable()
export class AuthService {
    constructor(
        @Inject('UsersService')
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ) { }

    async createToken(userLogin: Login) {
        const temp = await this.userService.findOne(userLogin.username as string);
        if (temp) {
            if (temp.password.toString() === userLogin.password) {
                const payload: JwtPayload = {
                    username: temp.username,
                    role: temp.role
                };
                const x_access_token = this.jwtService.sign(payload);
                const user = {
                    username: temp.username,
                    fullname: temp.fullname,
                    address: temp.address
                }
                return {
                    expiresIn: 3600,
                    token: x_access_token,
                    user
                };
            }
            else {
                throw new HttpException('Thông tin đăng nhập không hợp lệ. Kiểm tra lại !!!', HttpStatus.NOT_FOUND);
            }
        } else {
            throw new HttpException('Thông tin đăng nhập không hợp lệ. Kiểm tra lại !!!', HttpStatus.NOT_FOUND);
        }
    }

    async validateUser(payload: JwtPayload): Promise<User> {
        return this.userService.findOne(payload.username.toLowerCase());
    }
}