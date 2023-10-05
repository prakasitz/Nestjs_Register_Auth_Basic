import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserStrategy extends PassportStrategy(Strategy, 'user-guard') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_USER_SECRET,
        });
    }

    async validate(payload: any): Promise<any> {
        return payload;
    }
}