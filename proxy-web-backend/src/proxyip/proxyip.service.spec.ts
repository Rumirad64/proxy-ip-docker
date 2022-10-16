import { Test, TestingModule } from '@nestjs/testing';
import { ProxyipService } from './proxyip.service';

describe('ProxyipService', () => {
  let service: ProxyipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProxyipService],
    }).compile();

    service = module.get<ProxyipService>(ProxyipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
