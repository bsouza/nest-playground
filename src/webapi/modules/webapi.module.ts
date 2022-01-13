import { Module } from '@nestjs/common';
import { AddUser } from '../../domain/users/AddUser';
import { UserRepository } from '../../infra/UserRepository';
import { AppController } from '../app.controller';
import { InfraModule } from '../modules/infra.module';

@Module({
  imports: [InfraModule],
  controllers: [AppController],
  providers: [
    {
      provide: AddUser,
      useFactory: (userRepo: UserRepository) => {
        console.log('teste', userRepo);
        return new AddUser(userRepo);
      },
      inject: [UserRepository],
    },
  ],
  exports: [WebApiModule],
})
export class WebApiModule {}
