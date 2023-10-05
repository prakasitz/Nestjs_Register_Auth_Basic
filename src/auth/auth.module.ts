import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { UserStrategy } from "./user.strategy";

@Module({
    imports: [
        PassportModule
    ],
    controllers: [],
    providers: [UserStrategy],
    exports: [UserStrategy],
})
export class AuthModule { }
