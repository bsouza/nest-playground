import { Module } from '@nestjs/common';
import { InfraModule } from './modules/infra.module';
import { WebApiModule } from './modules/webapi.module';

@Module({
  imports: [InfraModule, WebApiModule],
})
export class AppModule {}
