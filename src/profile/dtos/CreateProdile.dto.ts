import { ApiProperty } from "@nestjs/swagger";


export class CreateProdileDto {

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  age: number;
}

export class UpdateProdileDto {

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  age: number;
}
