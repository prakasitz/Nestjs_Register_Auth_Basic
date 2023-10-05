import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class LogInDto {
  @ApiProperty({ required: true, description: 'The username' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ required: true, description: 'The password' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
