import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/interfaces/product.interface';
import { CreateProductDto } from 'src/dto/product.dto';
import { Category } from 'src/interfaces/category.interface';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel('Product') private readonly productModel: Model<Product>,
        @InjectModel('Category') private readonly categoryModel: Model<Category>
    ) { }

    async create(createProductDto: CreateProductDto): Promise<Object> {
        const createdProduct = await new this.productModel(createProductDto);
        const result = await createdProduct.save();

        let category = await this.categoryModel.findById(result.category).exec();
        category.products.push(result);
        const update = await this.categoryModel.findByIdAndUpdate(result.category, category, { new: true }).exec();
        if (result || update) {
            return { message: 'Thêm sản phẩm thành công' };
        }
        return { message: 'Thêm không thành công. Kiểm tra lại' };
    }

    async update(id: String, updateProductDto): Promise<Object> {
        try {
            const result = await this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true }).exec();
            if (result) {
                return { data: result, message: 'Cập nhật thông tin thành công' };
            }
        } catch (err) {
            throw new HttpException('Product not found with id:' + id, HttpStatus.NOT_FOUND);
        }
    }

    async findAll(): Promise<Product[]> {
        return await this.productModel.find().select('-__v').exec();
    }

    async findOneById(_id: String): Promise<Product> {
        return await this.productModel.findById({ _id }).select('-__v').exec();
    }

    async findOne(query: String): Promise<Product[]> {
        return await this.productModel.findOne({ query }).select('-__v').exec();
    }

    async delete(id: String): Promise<Object> {
        const result = await this.productModel.findByIdAndRemove(id).exec();
        if (result) {
            return { message: 'Đã xóa thành công sản phẩm' };
        }
        return { message: 'Xóa không thành công. Kiểm tra lại' };
    }

}
