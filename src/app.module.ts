import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { RegsiterDemoMongooseConnection } from './connection/register-demo.mongoose';
import { ConfigModule } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthModule } from './auth/auth.module';
import { UserAuthModules } from './auth/user/user.auth.module';
import { RegisterModule } from './register/register.module';
import { CountryModule } from './master/country/country.module';

@Module({
  imports: [
        ConfigModule.forRoot(),
        TypegooseModule.forRootAsync({
          useClass: RegsiterDemoMongooseConnection,
          connectionName: "RegisterDemoMongoose",
        }),
        AuthModule,
        UserAuthModules,
        RegisterModule,
        CountryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
