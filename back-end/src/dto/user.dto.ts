import { UserRole } from "src/user/user-role.enum";
import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';
import { prop } from 'typegoose'


export class CreateUserDto {
    @ApiModelProperty()
    @IsString()
    @prop({
        required: [true, 'Username is required'],
        unique: true,
        minlength: [6, 'Must be at least 6 characters'],
    })
    readonly username: string;

    @ApiModelProperty()
    @IsString()
    @prop({
        required: [true, 'Password is required'],
        minlength: [6, 'Must be at least 6 characters'],
    })
    readonly password: string;

    @ApiModelProperty()
    @IsString()
    readonly fullname: string;

    @ApiModelProperty()
    @IsString()
    readonly phone: string;

    @ApiModelProperty()
    @IsEmail()
    readonly email: string;

    @ApiModelProperty()
    @IsString()
    readonly address: string;

    @ApiModelProperty({ enum: ['User', 'Admin'] })
    @prop({ enum: UserRole, default: UserRole.User })
    readonly role: String;

    @ApiModelProperty()
    @IsString()
    readonly order_details: String[];
}