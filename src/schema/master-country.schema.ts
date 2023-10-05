// master-country.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
    collection: 'master-country',
    timestamps: true,
})
export class MasterCountry extends Document {
  @Prop({ required: true, unique: true })
  country_code: string;

  @Prop({ required: true })
  country_name: string;
}

export const MasterCountrySchema = SchemaFactory.createForClass(MasterCountry);

