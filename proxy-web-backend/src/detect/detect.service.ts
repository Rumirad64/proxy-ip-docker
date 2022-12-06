import { Injectable } from '@nestjs/common';
import { CreateDetectDto } from './dto/create-detect.dto';
import { UpdateDetectDto } from './dto/update-detect.dto';

@Injectable()
export class DetectService {
  create(createDetectDto: CreateDetectDto) {
    return 'This action adds a new detect';
  }

  findAll() {
    return `This action returns all detect`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detect`;
  }

  update(id: number, updateDetectDto: UpdateDetectDto) {
    return `This action updates a #${id} detect`;
  }

  remove(id: number) {
    return `This action removes a #${id} detect`;
  }
}
