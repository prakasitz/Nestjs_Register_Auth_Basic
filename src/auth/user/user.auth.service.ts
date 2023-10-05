import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ReturnModelType } from "@typegoose/typegoose";
import { InjectModel } from "nestjs-typegoose";
import { Register } from "src/model/register.model";

@Injectable()
export class UserAuthService {
    constructor(
        private jwtService: JwtService,
        @InjectModel(Register)
        private readonly registerModel: ReturnModelType<typeof Register>,
        ) {
    }

    async checkUserLogin(username: string, password: string): Promise<any> {
        const userOrNull = await this.registerModel.login(username, password, this.registerModel);
        if (userOrNull) {
            const jwtBody: jwtBody = {
                aud: 'register',
                sub: `${userOrNull.username}`,
                commonid: userOrNull["_id"],
                commonname: userOrNull.firstName,
                displayname: `${userOrNull.firstName} ${userOrNull.lastName}`,
            }
            
            const tokenString: string = await this.jwtService.signAsync({ ...jwtBody }, { secret: process.env.JWT_USER_SECRET , expiresIn: 6000 });
            return { access_token: tokenString };
        }
        return null
    }
}