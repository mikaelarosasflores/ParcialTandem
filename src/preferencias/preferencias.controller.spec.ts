import { Test, TestingModule } from '@nestjs/testing';
import { PreferenciasController } from './preferencias.controller.js';
import { PreferenciasService } from './preferencias.service.js';

describe('PreferenciasController', () => {
  let controller: PreferenciasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreferenciasController],
      providers: [PreferenciasService],
    }).compile();

    controller = module.get<PreferenciasController>(PreferenciasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
