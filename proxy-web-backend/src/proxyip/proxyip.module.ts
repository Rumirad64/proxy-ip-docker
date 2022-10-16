import { Module } from '@nestjs/common';
import { ProxyipService } from './proxyip.service';
import { ProxyipController } from './proxyip.controller';

@Module({
  controllers: [ProxyipController],
  providers: [ProxyipService],
})
export class ProxyipModule {}
