import { ApiProperty } from "@nestjs/swagger";

export class SearchEmployeDto {
  @ApiProperty()
  searchName: string;

  @ApiProperty()
  searchAddress: string;
}

