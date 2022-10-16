import { Test, TestingModule } from '@nestjs/testing';
import { ProxyipController } from './proxyip.controller';
import { ProxyipService } from './proxyip.service';

describe('ProxyipController', () => {
  let controller: ProxyipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProxyipController],
      providers: [ProxyipService],
    }).compile();

    controller = module.get<ProxyipController>(ProxyipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
