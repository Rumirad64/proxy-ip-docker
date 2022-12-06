import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetectService } from './detect.service';
import { CreateDetectDto } from './dto/create-detect.dto';
import { UpdateDetectDto } from './dto/update-detect.dto';

@Controller('detect')
export class DetectController {
  constructor(private readonly detectService: DetectService) {}

  @Post()
  create(@Body() createDetectDto: CreateDetectDto) {
    return this.detectService.create(createDetectDto);
  }

  @Get()
  findAll() {
    return this.detectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetectDto: UpdateDetectDto) {
    return this.detectService.update(+id, updateDetectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detectService.remove(+id);
  }
}
