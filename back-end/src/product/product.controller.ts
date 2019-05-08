import { Controller, Post, Body, Put, Param, Get, HttpCode, Delete } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { CreateProductDto } from 'src/dto/product.dto';
import { ProductService } from './product.service';
import { Product } from 'src/interfaces/product.interface';


@ApiUseTags('Sản phẩm')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }
  @ApiOperation({ title: 'Create Product' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @Post('create')
  async create(@Body() createProductDto: CreateProductDto): Promise<Object> {
    return await this.productService.create(createProductDto);
  }

  @Put('update/:id')
  @ApiOperation({ title: 'Cập nhật thông tin sản phẩm' })
  async updateProduct(@Param('id') id: string, @Body() updateProductDto: CreateProductDto): Promise<Object> {
    return await this.productService.update(id, updateProductDto);;
  }

  @Get('api/:id')
  @HttpCode(200)
  @ApiCreatedResponse({ type: CreateProductDto })
  @ApiOperation({ title: 'Lấy thông tin của sản phẩm theo ID' })
  async findOneById(@Param('id') id: String): Promise<Product> {
    return await this.productService.findOneById(id);
  }

  @Get('api')
  @HttpCode(200)
  @ApiCreatedResponse({ type: CreateProductDto })
  @ApiOperation({ title: 'Lấy thông tin tất cả các sản phẩm' })
  async findAll(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  @Get('api/:query')
  @HttpCode(200)
  @ApiCreatedResponse({ type: CreateProductDto })
  @ApiOperation({ title: 'Lấy thông tin sản phẩm theo query' })
  async findOne(@Param('query') query: String): Promise<Product[]> {
    return await this.productService.findOne(query);
  }

  @Delete('api/delete/:id')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    description: 'Đã xóa thành công sản phẩm',
  })
  @ApiOperation({ title: 'Xóa thông tin sản phẩm theo ID' })
  // @ApiCreatedResponse({ type: CreateUserDto })
  async findUserAndRemove(@Param('id') id: string): Promise<Object> {
    return this.productService.delete(id);
  }


}
