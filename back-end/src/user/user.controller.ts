import { Controller, Get, Post, Body, Param, UseInterceptors, UploadedFile, UploadedFiles, UseGuards, SetMetadata } from '@nestjs/common';
import { FilesInterceptor, FileInterceptor } from '@nestjs/platform-express'
import { CreateUserDto } from '../dto/user.dto';
import { UsersService } from './user.service';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import { diskStorage } from 'multer';
import { ApiUseTags, ApiOperation, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';

@ApiUseTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @ApiOperation({ title: 'Create User' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFile(@UploadedFiles() files) {
    console.log(files);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @SetMetadata('roles', ['Admin'])
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 401, description: 'You do not have permission (Roles).' })
  @ApiCreatedResponse({ type: CreateUserDto })
  @Get('api')
  async findAll() {
    return this.usersService.findAll();
  }

  @Get('api/:id')
  @ApiCreatedResponse({ type: CreateUserDto })
  async findOneById(@Param('id') id: string) {
    return this.usersService.findOneById(id);
  }

}