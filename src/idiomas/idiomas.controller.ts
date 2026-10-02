import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IdiomasService } from './idiomas.service.js';
import { CreateIdiomaDto } from './dto/create-idioma.dto.js';
import { UpdateIdiomaDto } from './dto/update-idioma.dto.js';

@Controller('idiomas')
export class IdiomasController {
  constructor(private readonly idiomasService: IdiomasService) {}

  @Post()
  create(@Body() createIdiomaDto: CreateIdiomaDto) {
    return this.idiomasService.create(createIdiomaDto);
  }

  @Get()
  findAll() {
    return this.idiomasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.idiomasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIdiomaDto: UpdateIdiomaDto) {
    return this.idiomasService.update(+id, updateIdiomaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.idiomasService.remove(+id);
  }
}
