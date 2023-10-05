import { Body, Controller, Post, HttpException, HttpStatus, UseGuards, Req, Get } from "@nestjs/common";
import { UserAuthGuard } from "../auth.guard";
import { UserAuthService } from "./user.auth.service";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import {jwtPayload, jwtBody} from '../jwt.interface';
import { LogInDto } from "src/dto/login.dto";
import { ResponseAuthLogin, ResponseJWTBody } from "src/dto/response.dto";
@Controller('user/auth')
export class UserAuthController {
    constructor(
        private readonly userAuthService: UserAuthService,
      ) {
    }

    @Post('/login')
    @ApiTags('Auth')
    @ApiOperation({ summary: 'Login and retrieve an access token' })
    @ApiResponse({ status: 200, description: 'Returns an access token', type: ResponseAuthLogin })
    async checkUserLogin(@Body() body: LogInDto): Promise<{ access_token: string }> {
      try {
        const { username, password } = body;
        const JWTtoken = await this.userAuthService.checkUserLogin(username, password);
        if (!JWTtoken) {
          throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        }
        return JWTtoken;
      } catch (error) {
        throw error;
      }
    }
  
    @Get('/userInfo')
    @ApiTags('Auth')
    @ApiOperation({ summary: 'Get user information' })
    @ApiResponse({ status: 200, description: 'Returns user information', type: ResponseJWTBody})
    @ApiBearerAuth()
    @UseGuards(UserAuthGuard)
    async getUserLogin(@Req() req): Promise<jwtBody> {
      if (!req.user) {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }
      return req.user;
    }
}