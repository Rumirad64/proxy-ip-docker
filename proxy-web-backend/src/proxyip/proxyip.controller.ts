import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProxyipService } from './proxyip.service';
import { CreateProxyipDto } from './dto/create-proxyip.dto';
import { UpdateProxyipDto } from './dto/update-proxyip.dto';

@Controller('proxyip')
export class ProxyipController {
  constructor(private readonly proxyipService: ProxyipService) {}

  @Post()
  create(@Body() createProxyipDto: CreateProxyipDto) {
    return this.proxyipService.create(createProxyipDto);
  }

  @Get()
  findAll() {
    return this.proxyipService.findAll();
  }

  @Get(':ip')
  findOne(@Param('ip') ip: string) {
    return this.proxyipService.findOne(ip);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proxyipService.remove(+id);
  }
}
