import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProxyipModule } from './proxyip/proxyip.module';

@Module({
  imports: [ProxyipModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
