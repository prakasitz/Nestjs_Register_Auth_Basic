import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Register } from './model/register.model';
import { UserAuthGuard } from './auth/auth.guard';
import { MasterCountry } from './model/master-country.model';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor (
    private readonly appService: AppService,
  ) {}

  @Post('/register')
  @ApiTags('Register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({ status: 201, description: 'User registered successfully', type: Register })
  async register(@Body() registerData: Register) {
    return this.appService.register(registerData);
  }

  @Get('/register')
  @ApiTags('Register')
  @ApiOperation({ summary: 'Get all registered users' })
  @ApiResponse({ status: 200, description: 'Return a list of registered users', type: [Register] })
  @ApiBearerAuth()
  @UseGuards(UserAuthGuard)
  async findRegisterAll(): Promise<Register[]> {
    return this.appService.getRegister();
  }

  @Get('/country')
  @ApiTags('Country')
  @ApiOperation({ summary: 'Get all countries' })
  @ApiResponse({ status: 200, description: 'Return a list of countries', type: [MasterCountry] }) 
  async findCountryAll(): Promise<MasterCountry[]> {
    return this.appService.getMasterCountry();
  }

  @Get()
  @ApiTags('Hello World')
  getHello(): string {
    return this.appService.getHello();
  }
}
