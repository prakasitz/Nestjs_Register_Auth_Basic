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

  @Get()
  @ApiTags('Hello World')
  getHello(): string {
    return this.appService.getHello();
  }
}
