import { ApiProperty } from '@nestjs/swagger';
import { prop, ModelOptions } from '@typegoose/typegoose';

@ModelOptions({ schemaOptions: { collection: 'master-country' } })
export class MasterCountry {
  @ApiProperty({ required: true, description: 'The country code', uniqueItems: true })
  @prop({ required: true, unique: true })
  country_code: string;

  @ApiProperty({ required: true, description: 'The country name' })
  @prop({ required: true })
  country_name: string;
}
