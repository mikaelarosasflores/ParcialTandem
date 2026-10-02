import { Injectable } from '@nestjs/common';
import { CreateIdiomaDto } from './dto/create-idioma.dto.js';
import { UpdateIdiomaDto } from './dto/update-idioma.dto.js';

@Injectable()
export class IdiomasService {
  create(createIdiomaDto: CreateIdiomaDto) {
    return 'This action adds a new idioma';
  }

  findAll() {
    return `This action returns all idiomas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} idioma`;
  }

  update(id: number, updateIdiomaDto: UpdateIdiomaDto) {
    return `This action updates a #${id} idioma`;
  }

  remove(id: number) {
    return `This action removes a #${id} idioma`;
  }
}
