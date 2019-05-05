import { Controller, Get, Post, Body, Param, UseInterceptors, UploadedFile, UploadedFiles, UseGuards, SetMetadata, Delete, Put } from '@nestjs/common';
import { FilesInterceptor, FileInterceptor } from '@nestjs/platform-express'
import { CreateUserDto } from '../dto/user.dto';
import { UsersService } from './user.service';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import { diskStorage } from 'multer';
import { ApiUseTags, ApiOperation, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { User } from 'src/interfaces/user.interface';

@ApiUseTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFile(@UploadedFiles() files) {
    console.log(files);
  }

  @ApiOperation({ title: 'Create User' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @Post('create')
  async create(@Body() createUserDto: CreateUserDto): Promise<Object> {
    return this.usersService.create(createUserDto);
  }

  @Put('update/:id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: CreateUserDto):Promise<Object>{
    return await this.usersService.update(id, updateUserDto);;
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @SetMetadata('roles', ['Admin'])
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'You do not have permission (Roles).' })
  @ApiCreatedResponse({ type: CreateUserDto })
  @Get('api')
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get('api/:id')
  @ApiCreatedResponse({ type: CreateUserDto })
  async findOneById(@Param('id') id: string) {
    return this.usersService.findOneById(id);
  }

  @Delete('api/:id')
  // @ApiCreatedResponse({ type: CreateUserDto })
  async findUserAndRemove(@Param('id') id: string): Promise<object> {
    return this.usersService.delete(id);
  }
}