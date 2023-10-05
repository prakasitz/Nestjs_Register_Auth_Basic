import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MasterCountry } from './schema/master-country.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor (
    @InjectModel(MasterCountry.name, 'RegisterDemoMongoose') 
    private readonly masterCountryModel: Model<MasterCountry>,
  ) {}

  getMasterCountry() {
    return this.masterCountryModel.find().exec();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
