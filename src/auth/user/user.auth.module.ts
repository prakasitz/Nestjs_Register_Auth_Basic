import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserAuthController } from './user.auth.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Register } from 'src/model/register.model';
import { MasterCountry } from 'src/model/master-country.model';
import { UserAuthService } from './user.auth.service';

@Module({
    imports: [
        TypegooseModule.forFeature([
            MasterCountry, Register
          ], 'RegisterDemoMongoose'),
    ],
    controllers: [
        UserAuthController
    ],
    providers: [
        UserAuthService,
        JwtService
    ]
})

export class UserAuthModules {

}