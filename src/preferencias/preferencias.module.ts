import { Module } from '@nestjs/common';
import { PreferenciasService } from './preferencias.service.js';
import { PreferenciasController } from './preferencias.controller.js';

@Module({
  controllers: [PreferenciasController],
  providers: [PreferenciasService],
})
export class PreferenciasModule {}
