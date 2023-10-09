import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { MasterCountry } from 'src/model/master-country.model';
import { Register } from 'src/model/register.model';
import { AuthModule } from 'src/auth/auth.module';
import { UserAuthModules } from 'src/auth/user/user.auth.module';
import { CountryModule } from 'src/master/country/country.module';

@Module({
  imports: [
    TypegooseModule.forFeature([
      MasterCountry, Register
    ], 'RegisterDemoMongoose'),
    UserAuthModules,
    CountryModule
  ],
  providers: [RegisterService],
  controllers: [RegisterController]
})
export class RegisterModule {}
