import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { MasterCountry } from 'src/model/master-country.model';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(MasterCountry)
    private readonly masterCountryModel: ReturnModelType<typeof MasterCountry>,
  ) {}

  getMasterCountry(): Promise<MasterCountry[]> {
    return this.masterCountryModel.find().exec();
  }
}
