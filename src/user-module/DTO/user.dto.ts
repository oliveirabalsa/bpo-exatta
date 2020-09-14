import { IsNotEmpty, IsString, IsArray, IsDateString } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  moneyQuantity: string;

  @IsNotEmpty()
  @IsString()
  type: string;
}
