import { Injectable } from '@nestjs/common';
import { CreateProxyipDto } from './dto/create-proxyip.dto';
import { UpdateProxyipDto } from './dto/update-proxyip.dto';
import ProxyDetect from 'proxy-ip-d';

@Injectable()
export class ProxyipService {
  private proxyDetect = new ProxyDetect();
  constructor() {
    this.proxyDetect.init({
      host: '',
      port: 19831,
      password: '',
      username: 'default',
      ports: [8000, 443, 8080, 8081, 1194, 3128],
    });
  }

  create(createProxyipDto: CreateProxyipDto) {
    return 'This action adds a new proxyip';
  }

  findAll() {
    return `This action returns all proxyip`;
  }

  async findOne(ip: string) {
    console.log('findOne service', ip);
    const res = await this.proxyDetect.IsProxy(ip);
    return { ip, res };
  }

  update(id: number, updateProxyipDto: UpdateProxyipDto) {
    return `This action updates a #${id} proxyip`;
  }

  remove(id: number) {
    return `This action removes a #${id} proxyip`;
  }
}
