import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async register(registerDto: Register): Promise<Register> {
    try {
      const { countryCode } = registerDto;
      const countryObjOrNull = await this.masterCountryModel.findOne({
        country_code: countryCode
      }).exec();

      if(countryObjOrNull === null) 
        throw new HttpException('Country code not found', HttpStatus.NOT_FOUND);

      const newUser = new this.registerModel(registerDto);
      await newUser.save();

      return newUser;
    } catch (error) {
      if (error.code === 11000 && error.keyPattern.username === 1) {
        throw new HttpException('Username already exists', HttpStatus.CONFLICT);
      }
      console.error('Error creating user:', error);
      throw error;
    }
  }

  login(username: string, password: string): Promise<any> {
    return this.registerModel.login(username, password, this.registerModel)
  }

  getRegister(): Promise<Register[]> {
    return this.registerModel.find().exec();
  }

  getMasterCountry(): Promise<MasterCountry[]> {
    return this.masterCountryModel.find().exec();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
