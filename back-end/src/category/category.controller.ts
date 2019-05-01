import { Controller, Post, Body } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateCategoryDto } from 'src/dto/category.dto';
import { CategoryService } from './category.service';

@ApiUseTags('Danh mục sản phẩm')
@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService){}
    @ApiOperation({ title: 'Create Category' })
    @ApiResponse({
      status: 201,
      description: 'The record has been successfully created.',
    })
    @Post('create')
    async create(@Body() createUserDto: CreateCategoryDto) {
    //   this.categoryService.create(createUserDto);
    }
}
