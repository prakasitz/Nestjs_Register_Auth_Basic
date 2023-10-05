import { prop, getModelForClass, ModelOptions, ReturnModelType } from '@typegoose/typegoose';
import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

@ModelOptions({ schemaOptions: { collection: 'register' } })
export class Register {

  @IsString()
  @IsNotEmpty()
  @prop({ required: true })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @prop({ required: true })
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @prop({ required: true })
  countryCode: string;

  @IsNotEmpty()
  @prop({ required: true, unique: true })
  username: string;

  @IsString()
  @IsNotEmpty()
  @prop({ required: true })
  @Exclude()
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