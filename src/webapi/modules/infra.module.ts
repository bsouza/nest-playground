import { Module } from '@nestjs/common';
import { UserRepository } from 'src/infra/UserRepository';

@Module({
  providers: [
    {
      provide: UserRepository,
      useFactory: () => {
        console.log('userfactory');
        return new UserRepository();
      },
    },
  ],
  exports: [UserRepository],
})
export class InfraModule {}
