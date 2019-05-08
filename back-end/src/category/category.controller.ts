import { Controller, Post, Body, Get, Param, Put, HttpCode, Delete } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { CreateCategoryDto } from 'src/dto/category.dto';
import { CategoryService } from './category.service';
import { Category } from 'src/interfaces/category.interface';

@ApiUseTags('Danh mục sản phẩm')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiOperation({ title: 'Tạo danh mục cho sản phẩm' })
  @Post('create')
  async create(@Body() createCategoryDto: CreateCategoryDto): Promise<Object> {
    return await this.categoryService.create(createCategoryDto);
  }

  @Put('update/:id')
  @ApiOperation({ title: 'Cập nhật thông tin danh mục cho sản phẩm' })
  async updateCategory(@Param('id') id: string, @Body() updateCategoryDto: CreateCategoryDto): Promise<Object> {
    return await this.categoryService.update(id, updateCategoryDto);;
  }

  @Get('api/findproducts/:id')
  @HttpCode(200)
  @ApiCreatedResponse({ type: CreateCategoryDto })
  @ApiOperation({ title: 'Lấy thông tin tất cả sản phẩm thuộc danh mục sản phẩm' })
  async findProductsByCategoryId(@Param('id') id: String): Promise<Object> {
    return await this.categoryService.findProductsByCategoryId(id);
  }

  @Get('api/findallproducts')
  @HttpCode(200)
  @ApiCreatedResponse({ type: CreateCategoryDto })
  @ApiOperation({ title: 'Lấy thông tin tất cả sản phẩm thuộc danh mục sản phẩm' })
  async findAllProducts(): Promise<any[]> {
    return await this.categoryService.findAllProducts();
  }

  @Get('api/:id')
  @HttpCode(200)
  @ApiCreatedResponse({ type: CreateCategoryDto })
  @ApiOperation({ title: 'Lấy thông tin của danh mục sản phẩm theo ID' })
  async findOneById(@Param('id') id: String): Promise<Category> {
    return await this.categoryService.findOneById(id);
  }

  @Get('api')
  @HttpCode(200)
  @ApiCreatedResponse({ type: CreateCategoryDto })
  @ApiOperation({ title: 'Lấy thông tin tất danh mục sản phẩm' })
  async findAll(): Promise<Category[]> {
    return await this.categoryService.findAll();
  }

  @Get('api/:categoryName')
  @HttpCode(200)
  @ApiCreatedResponse({ type: CreateCategoryDto })
  @ApiOperation({ title: 'Lấy thông tin danh mục sản phẩm theo Category Name' })
  async findOne(@Param('categoryName') categoryName: String): Promise<Category> {
    return await this.categoryService.findOne(categoryName);
  }

  @Delete('api/delete/:id')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    description: 'Đã xóa thành công danh mục sản phẩm',
  })
  @ApiOperation({ title: 'Xóa thông tin danh mục sản phẩm theo ID' })
  // @ApiCreatedResponse({ type: CreateUserDto })
  async findUserAndRemove(@Param('id') id: string): Promise<Object> {
    return this.categoryService.delete(id);
  }

}
