import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserAuthGuard } from 'src/auth/auth.guard';
import { Register } from 'src/model/register.model';

@ApiTags('Register')
@Controller('register')
export class RegisterController {

    @Post('/')
    @ApiOperation({ summary: 'Register a new user' })
    @ApiResponse({ status: 201, description: 'User registered successfully', type: Register })
    async register(@Body() registerData: Register) {
      return this.appService.register(registerData);
    }
  
    @Get('/')
    @ApiOperation({ summary: 'Get all registered users' })
    @ApiResponse({ status: 200, description: 'Return a list of registered users', type: [Register] })
    @ApiBearerAuth()
    @UseGuards(UserAuthGuard)
    async findRegisterAll(): Promise<Register[]> {
      return this.appService.getRegister();
    }
  
}
