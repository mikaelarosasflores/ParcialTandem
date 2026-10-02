import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto.js';
import { UpdatePersonaDto } from './dto/update-persona.dto.js';
import { Persona } from './entities/persona.entity.js';

@Injectable()
export class PersonaService {
  personas: Persona[] = [];
  create(createPersonaDto: CreatePersonaDto) {
    const nuevaPersona = new Persona();
    nuevaPersona.alias = createPersonaDto.alias;
    nuevaPersona.activa = true;
    if (createPersonaDto.preferencias) {
      nuevaPersona.preferencias = createPersonaDto.preferencias;
    }
    return 'This action adds a new persona';
  }

  findAll() {
    return `This action returns all persona`;
  }

  findOne(id: number) {
    return `This action returns a #${id} persona`;
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return `This action updates a #${id} persona`;
  }

  remove(id: number) {
    return `This action removes a #${id} persona`;
  }
}
