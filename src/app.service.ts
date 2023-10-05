import { Injectable } from '@nestjs/common';
import { MasterCountry } from './model/master-country.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Register } from './model/register.model';

@Injectable()
export class AppService {
  constructor (
    @InjectModel(MasterCountry) 
    private readonly masterCountryModel:  ReturnModelType<typeof MasterCountry>,
    @InjectModel(Register) 
    private readonly registerModel: ReturnModelType<typeof Register>,
  ) {}

  // register(registerDto) {

  // }

  getMasterCountry() {
    return this.masterCountryModel.find().exec();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
