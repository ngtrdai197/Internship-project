import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from 'src/interfaces/category.interface';
import { CreateCategoryDto } from 'src/dto/category.dto';

@Injectable()
export class CategoryService {
    constructor(@InjectModel('Category') private readonly categoryModel: Model<Category>) { }

    async create(createCategoryDto: CreateCategoryDto): Promise<Object> {
        const createdCategory = new this.categoryModel(createCategoryDto);
        const result = await createdCategory.save();
        if (result) {
            return { message: 'Thêm thành công danh mục của sản phẩm' };
        }
        return { message: 'Thêm không thành công. Kiểm tra lại' };
    }

    async findProductsByCategoryId(id: String): Promise<Object> {
        const createdCategory = await this.categoryModel.findById(id).populate('products').exec();
        if (createdCategory) {
            return createdCategory;
        }
        return null;
    }

    async update(id: String, updateCategoryDto): Promise<Object> {
        try {
            const result = await this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, { new: true }).exec();
            if (result) {
                return { data: result, message: 'Cập nhật thông tin thành công' };
            }
        } catch (err) {
            throw new HttpException('Category not found with id:' + id, HttpStatus.NOT_FOUND);
        }
    }

    async findAll(): Promise<Category[]> {
        return await this.categoryModel.find().exec();
    }

    async findAllProducts(): Promise<any[]>{
        const createdCategory = await this.categoryModel.find().populate('products').exec();
        if (createdCategory) {
            return createdCategory;
        }
        return null;
    }

    async findOneById(_id: String): Promise<Category> {
        return await this.categoryModel.findById({ _id }).exec();
    }

    async findOne(categoryName: String): Promise<Category> {
        return await this.categoryModel.findOne({ categoryName }).exec();
    }

    async delete(id: String): Promise<Object> {
        const result = await this.categoryModel.findByIdAndRemove(id).exec();
        if (result) {
            return { message: 'Đã xóa thành công danh mục sản phẩm' };
        }
        return { message: 'Xóa không thành công. Kiểm tra lại' };
    }


}
