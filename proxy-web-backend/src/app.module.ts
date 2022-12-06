import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DetectModule } from './detect/detect.module';

@Module({
  imports: [DetectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
