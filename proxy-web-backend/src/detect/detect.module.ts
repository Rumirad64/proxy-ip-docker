import { Module } from '@nestjs/common';
import { DetectService } from './detect.service';
import { DetectController } from './detect.controller';

@Module({
  controllers: [DetectController],
  providers: [DetectService]
})
export class DetectModule {}
