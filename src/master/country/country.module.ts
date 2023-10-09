import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { UserAuthModules } from 'src/auth/user/user.auth.module';
import { MasterCountry } from 'src/model/master-country.model';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
      TypegooseModule.forFeature([
        MasterCountry
      ], 'RegisterDemoMongoose'),
      UserAuthModules,
  ],
  providers: [CountryService],
  controllers: [CountryController],
})
export class CountryModule {}
