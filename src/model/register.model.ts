import { ApiProperty } from '@nestjs/swagger';
import { prop, ModelOptions, ReturnModelType } from '@typegoose/typegoose';
import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

@ModelOptions({ schemaOptions: { collection: 'register' } })
export class Register {

    @ApiProperty({ description: 'The Object Id', readOnly: true })
    _id: string;

    @ApiProperty({ required: true, description: 'The first name' })
    @IsString()
    @IsNotEmpty()
    @prop({ required: true })
    firstName: string;
  
    @ApiProperty({ required: true, description: 'The last name' })
    @IsString()
    @IsNotEmpty()
    @prop({ required: true })
    lastName: string;
  
    @ApiProperty({ required: true, description: 'The country code' })
    @IsString()
    @IsNotEmpty()
    @prop({ required: true })
    countryCode: string;
  
    @ApiProperty({ required: true, description: 'The username', uniqueItems: true })
    @IsNotEmpty()
    @prop({ required: true, unique: true })
    username: string;
  
    @ApiProperty({ required: true, description: 'The password' })
    @IsString()
    @IsNotEmpty()
    @prop({ required: true })
    password: string;

  constructor(partial: Partial<Register>) {
    Object.assign(this, partial);
  }

  static async login(username: string, password: string, registerModel: ReturnModelType<typeof Register>): Promise<Register | null> {
    try {
      const userOrNull = await registerModel.findOne({ username, password }).exec();
      return userOrNull;
    } catch (error) {
      throw new Error('Error checking username and password');
    }
  }
}