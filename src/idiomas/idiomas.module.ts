import { Module } from '@nestjs/common';
import { IdiomasService } from './idiomas.service.js';
import { IdiomasController } from './idiomas.controller.js';

@Module({
  controllers: [IdiomasController],
  providers: [IdiomasService],
})
export class IdiomasModule {}
