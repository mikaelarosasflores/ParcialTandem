import { PartialType } from '@nestjs/mapped-types';
import { CreatePreferenciaDto } from './create-preferencia.dto.js';

export class UpdatePreferenciaDto extends PartialType(CreatePreferenciaDto) {}
