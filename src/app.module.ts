import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { RegsiterDemoMongooseConnection } from './connection/register-demo.mongoose';
import { ConfigModule } from '@nestjs/config';
import { MasterCountry, MasterCountrySchema } from './schema/master-country.schema';

@Module({
  imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRootAsync({
            useClass: RegsiterDemoMongooseConnection,
            connectionName: "RegisterDemoMongoose",
        }),
        MongooseModule.forFeature([
            { name: MasterCountry.name, schema: MasterCountrySchema }
        ], 'RegisterDemoMongoose')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
