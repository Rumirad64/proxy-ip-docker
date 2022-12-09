import { Injectable } from '@nestjs/common';
import { CreateDetectDto } from './dto/create-detect.dto';
import { UpdateDetectDto } from './dto/update-detect.dto';
import ProxyDetect from 'proxy-detect-module';
@Injectable()
export class DetectService {
  private proxyDetect = new ProxyDetect();
  constructor() {
    this.proxyDetect.init({
      host: process.env.REDIS_HOST || 'localhost',
      port: Number(process.env.REDIS_PORT) || 6379,
      password: process.env.REDIS_PASSWORD || '',
      username: process.env.REDIS_USERNAME || '',
      ports: process.env.PORTS?.split(',') as unknown as number[] || [443, 8080, 3128, 8081, 8000, 1194],
      mongoUri: process.env.MONGODB_URL || 'mongodb://localhost:27017/proxy-detect',
    });

    console.log("process.env", process.env);
  }

  async findAll(page: number, limit: number, search: string) {
    return await this.proxyDetect.GetProxyList(page, limit, search);
  }

  async findOne(ip: string) {
    console.log('findOne service', ip);
    const res = await this.proxyDetect.IsProxy(ip);
    return { ip, res };
  }

  update(id: number, updateDetectDto: UpdateDetectDto) {
    return `This action updates a #${id} detect`;
  }

  async remove(id: string) {
    return await this.proxyDetect.DeleteProxyIP(id); 
  }
}
