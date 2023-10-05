import { prop, ModelOptions } from '@typegoose/typegoose';

@ModelOptions({ schemaOptions: { collection: 'master-country' } })
export class MasterCountry {
  @prop({ required: true, unique: true })
  country_code: string;

  @prop({ required: true })
  country_name: string;
}