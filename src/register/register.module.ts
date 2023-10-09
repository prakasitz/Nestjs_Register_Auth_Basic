import { Module } from '@nestjs/common';
import { CoService } from './co/co.service';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';

@Module({
  providers: [CoService, RegisterService],
  controllers: [RegisterController]
})
export class RegisterModule {}
