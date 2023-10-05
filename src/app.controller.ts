import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Register, RegisterSchema } from './schema/register.schema';
import { InjectModel } from '@nestjs/mongoose';
import { MasterCountry } from './schema/master-country.schema';
import { Model } from 'mongoose';

@Controller()
export class AppController {
  constructor (
    private readonly appService: AppService,
  ) {}

  @Post('/')
  async create(@Body() data: Register) {
    // return this.registerModel.create(data);
  }

  @Get('/country')
  async findAll() {
   return this.appService.getMasterCountry();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
