import { Inject, Injectable, Type } from "@nestjs/common";
import { MongooseOptionsFactory, MongooseModuleOptions } from "@nestjs/mongoose";
import { TypegooseModuleOptions, TypegooseOptionsFactory } from "nestjs-typegoose";

@Injectable()
export class RegsiterDemoMongooseConnection implements TypegooseOptionsFactory {
    createTypegooseOptions(): TypegooseModuleOptions {
        return {
            uri: 'mongodb://'+process.env.DB_HOST+':'+Number(process.env.DB_PORT)+'/',
            dbName: process.env.DB_NAME, 
        };
    }
}
