import { ApiProperty } from "@nestjs/swagger";

export class UpdateEmployeeDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  mobile: number;
}