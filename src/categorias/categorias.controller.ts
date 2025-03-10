import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { Categoria } from './categoria.entity';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  // Rota para listar todas as categorias
  @Get()
  findAll(): Promise<Categoria[]> {
    return this.categoriasService.findAll();
  }

  // Rota para buscar uma categoria por ID
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Categoria | null> {
    return this.categoriasService.findOne(id);
  }

  // Rota para criar uma nova categoria
  @Post()
  create(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriasService.create(categoria);
  }

  // Rota para atualizar uma categoria existente
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() categoria: Categoria,
  ): Promise<Categoria | null> {
    return this.categoriasService.update(id, categoria);
  }

  // Rota para excluir uma categoria
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.categoriasService.remove(id);
  }
}
