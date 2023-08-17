import { ApiProperty } from "@nestjs/swagger";


export class CreateEmployeeDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  mobile: number;
}
