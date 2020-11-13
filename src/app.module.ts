import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProgramModule } from './program/program.module';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [UserModule, ProgramModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
