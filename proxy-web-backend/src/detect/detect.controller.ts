import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DetectService } from './detect.service';
import { CreateDetectDto } from './dto/create-detect.dto';
import { UpdateDetectDto } from './dto/update-detect.dto';

@Controller('detect')
export class DetectController {
  constructor(private readonly detectService: DetectService) {}

  @Get()
  findAll(@Query('page') page: number, @Query('limit') limit: number, @Query('search') search: string) {
    page = page || 1;
    limit = limit || 20;
    search = search || '';
    return this.detectService.findAll(page, limit, search);
  }

  @Get(':ip')
  findOne(@Param('ip') ip: string) {
    return this.detectService.findOne(ip);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetectDto: UpdateDetectDto) {
    return this.detectService.update(+id, updateDetectDto);
  }

  @Delete(':ip')
  remove(@Param('ip') ip: string) {
    return this.detectService.remove(ip);
  }
}
