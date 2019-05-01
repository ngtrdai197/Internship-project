import { ApiModelProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCategoryDto {
    @ApiModelProperty()
    @IsString()
    readonly categoryname: string;
}