import { ApiModelProperty } from "@nestjs/swagger";
import { IsString, IsArray } from "class-validator";
import { Product } from "src/interfaces/product.interface";

export class CreateCategoryDto {
    @ApiModelProperty()
    @IsString()
    readonly categoryName: String;

    @ApiModelProperty()
    @IsArray()
    @IsString()
    readonly products?: Product[] | String[];
}