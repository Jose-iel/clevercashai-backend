import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private categoriasRepository: Repository<Categoria>,
  ) {}

  // Retorna todas as categorias
  findAll(): Promise<Categoria[]> {
    return this.categoriasRepository.find();
  }

  // Retorna uma categoria por ID
  findOne(id: number): Promise<Categoria | null> {
    return this.categoriasRepository.findOne({ where: { id } });
  }

  // Cria uma nova categoria
  create(categoria: Categoria): Promise<Categoria> {
    return this.categoriasRepository.save(categoria);
  }

  // Atualiza uma categoria existente
  async update(id: number, categoria: Categoria): Promise<Categoria | null> {
    await this.categoriasRepository.update(id, categoria);
    return this.categoriasRepository.findOne({ where: { id } });
  }

  // Remove uma categoria
  async remove(id: number): Promise<void> {
    await this.categoriasRepository.delete(id);
  }
}
