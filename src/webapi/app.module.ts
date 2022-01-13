import { Module } from '@nestjs/common';
// import { AddUser } from '../domain/users/AddUser';
// import { UserRepository } from 'src/infra/UserRepository';
// import { AppController } from './app.controller';
import { InfraModule } from './modules/infra.module';
import { WebApiModule } from './modules/webapi.module';

@Module({
  imports: [InfraModule, WebApiModule],
})
export class AppModule {}
