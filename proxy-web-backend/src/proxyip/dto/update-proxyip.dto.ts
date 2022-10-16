import { PartialType } from '@nestjs/mapped-types';
import { CreateProxyipDto } from './create-proxyip.dto';

export class UpdateProxyipDto extends PartialType(CreateProxyipDto) {}
