import { prop, getModelForClass, ModelOptions } from '@typegoose/typegoose';

@ModelOptions({ schemaOptions: { collection: 'register' } })
export class Register {
  @prop({ required: true })
  firstName: string;

  @prop({ required: true })
  lastName: string;

  @prop({ required: true })
  countryCode: string;

  @prop({ required: true, unique: true })
  username: string;

  @prop({ required: true })
  password: string;
}