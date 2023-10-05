import { Body, Controller, Post, HttpException, HttpStatus, UseGuards, Req, Get } from "@nestjs/common";
import { UserAuthGuard } from "../auth.guard";
import { UserAuthService } from "./user.auth.service";
import { InjectModel } from "nestjs-typegoose";
import { Register } from "src/model/register.model";
import { ReturnModelType } from "@typegoose/typegoose";

@Controller('user/auth')
export class UserAuthController {
    constructor(
        private readonly userAuthService: UserAuthService,
        @InjectModel(Register) 
        private readonly registerModel: ReturnModelType<typeof Register>,
      ) {
    }

    @Post('/login')
    async checkUserLogin(@Body() body: any) {
        try {
            const {username, password} = body;
            const JWTtoken = await this.userAuthService.checkUserLogin(username, password);
            if (!JWTtoken) {
                throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
            }
           return JWTtoken;
        }
        catch (error) {
            throw error;
        }
    }

    @Get('/userInfo')
    @UseGuards(UserAuthGuard)
    async getUserLogin(@Req() req) {
        if (!req.user) {
            throw new HttpException({
                status: HttpStatus.UNAUTHORIZED,
                message: `401 UNAUTHORIZED`
            }, HttpStatus.UNAUTHORIZED);
        }
        return req.user;
    }
}