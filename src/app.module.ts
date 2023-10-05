import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { RegsiterDemoMongooseConnection } from './connection/register-demo.mongoose';
import { ConfigModule } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { MasterCountry } from './model/master-country.model';
import { Register } from './model/register.model';
import { AuthModule } from './auth/auth.module';
import { UserAuthModules } from './auth/user/user.auth.module';

@Module({
  imports: [
        ConfigModule.forRoot(),
        TypegooseModule.forRootAsync({
          useClass: RegsiterDemoMongooseConnection,
          connectionName: "RegisterDemoMongoose",
        }),
        TypegooseModule.forFeature([
          MasterCountry, Register
        ], 'RegisterDemoMongoose'),
        AuthModule,
        UserAuthModules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
