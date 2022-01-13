import { Module } from '@nestjs/common';
import { AddUser } from 'src/domain/users/AddUser';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AddUser],
})
export class AppModule {}
