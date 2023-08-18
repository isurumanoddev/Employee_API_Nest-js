import { ApiProperty } from "@nestjs/swagger";


export class CreatePostDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;
}

export class updatePostDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;
}
