import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MasterCountry } from './model/master-country.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Register } from './model/register.model';
import * as bcrypt from 'bcryptjs'; // Import bcryptjs
@Injectable()
export class AppService {
  constructor (
  ) {}

  getHello(): string {
    return 'Hello World!';
  }
}
