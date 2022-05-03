import { ICreateUserInterfaceRequest } from "@project-x/interfaces";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateUserDto implements ICreateUserInterfaceRequest{
  @IsString()
  @ApiProperty({
    description: "The user's username",
    example: "User1231",
  })
  username: string;

  @IsString()
  @ApiProperty({
    description: "The user's password",
    example: "password@123",
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: "The user's email",
    example: "example@example.com"
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: "The user's first name",
    example: "John",
  })
  firstName: string;

  @IsString()
  @ApiProperty({
    description: "The user's last name",
    example: "Doe",
  })
  lastName: string;
}
