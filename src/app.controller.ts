import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Register } from './schema/register.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body() data: Register) {
    // return this.registerModel.create(data);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
