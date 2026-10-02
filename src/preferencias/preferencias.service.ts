import { Injectable } from '@nestjs/common';
import { CreatePreferenciaDto } from './dto/create-preferencia.dto.js';
import { UpdatePreferenciaDto } from './dto/update-preferencia.dto.js';

@Injectable()
export class PreferenciasService {
  create(createPreferenciaDto: CreatePreferenciaDto) {
    return 'This action adds a new preferencia';
  }

  findAll() {
    return `This action returns all preferencias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} preferencia`;
  }

  update(id: number, updatePreferenciaDto: UpdatePreferenciaDto) {
    return `This action updates a #${id} preferencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} preferencia`;
  }
}
