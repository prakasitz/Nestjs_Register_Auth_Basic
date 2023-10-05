import { Inject, Injectable } from "@nestjs/common";
import { MongooseOptionsFactory, MongooseModuleOptions } from "@nestjs/mongoose";

@Injectable()
export class RegsiterDemoMongooseConnection implements MongooseOptionsFactory {
    createMongooseOptions(): MongooseModuleOptions {
        return {
            uri: 'mongodb://'+process.env.DB_HOST+':'+Number(process.env.DB_PORT)+'/',
            dbName: process.env.DB_NAME, 
        };
    }
}
