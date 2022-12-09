import { PartialType } from '@nestjs/mapped-types';
import { CreateDetectDto } from './create-detect.dto';

export class UpdateDetectDto extends PartialType(CreateDetectDto) {}
