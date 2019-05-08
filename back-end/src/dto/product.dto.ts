import { ApiModelProperty } from "@nestjs/swagger";
import { IsString, IsNumber } from "class-validator";

export class CreateProductDto {
    @ApiModelProperty()
    @IsString()
    readonly productName: String;

    @ApiModelProperty()
    @IsString()
    readonly description?: String;

    @ApiModelProperty()
    @IsString()
    readonly title: String;

    @ApiModelProperty()
    @IsNumber()
    readonly current_price: Number;

    @ApiModelProperty()
    @IsNumber()
    readonly old_price?: Number;

    @ApiModelProperty()
    @IsNumber()
    readonly discount?: Number;

    @ApiModelProperty()
    @IsString()
    readonly images?: String[];

    @ApiModelProperty()
    @IsString()
    readonly category: String;

}