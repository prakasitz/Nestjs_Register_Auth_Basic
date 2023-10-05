import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Register } from './model/register.model';
import { UserAuthGuard } from './auth/auth.guard';

@Controller()
export class AppController {
  constructor (
    private readonly appService: AppService,
  ) {}

  @Post('/register')
  async register(@Body() registerData: Register) { 
   return this.appService.register(registerData);
  }

  @Get('/register')
  @UseGuards(UserAuthGuard)
  async findRegisterAll(): Promise<Register[]> {
   return this.appService.getRegister();
  }

  @Get('/country')
  async findCountryAll() {
   return this.appService.getMasterCountry();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
