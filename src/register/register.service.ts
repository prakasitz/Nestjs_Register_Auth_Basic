import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { Register } from 'src/model/register.model';
import * as bcrypt from 'bcryptjs';
import { MasterCountry } from 'src/model/master-country.model';

@Injectable()
export class RegisterService {
  constructor(
    @InjectModel(Register)
    private readonly registerModel: ReturnModelType<typeof Register>,
    @InjectModel(MasterCountry)
    private readonly masterCountryModel: ReturnModelType<typeof MasterCountry>,
  ) {}

  async register(registerDto: Register): Promise<Register> {
    try {
      const { countryCode } = registerDto;
      const countryObjOrNull = await this.masterCountryModel
        .findOne({
          country_code: countryCode,
        })
        .exec();

      if (countryObjOrNull === null)
        throw new HttpException('Country code not found', HttpStatus.NOT_FOUND);

      registerDto.password = await bcrypt.hash(registerDto.password, 10);

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

  getRegister(): Promise<Register[]> {
    return this.registerModel.find().exec();
  }
}
