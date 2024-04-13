import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    author: string;

    @ApiProperty({ required: false, default: 0 })
    stock: number;
}
