import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transacao } from './transacao.entity';

@Injectable()
export class TransacoesService {
  constructor(
    @InjectRepository(Transacao)
    private transacoesRepository: Repository<Transacao>,
  ) {}

  findAll(): Promise<Transacao[]> {
    return this.transacoesRepository.find();
  }

  findOne(id: number): Promise<Transacao | null> {
    return this.transacoesRepository.findOne({ where: { id } });
  }

  create(transacao: Transacao): Promise<Transacao> {
    return this.transacoesRepository.save(transacao);
  }

  async update(id: number, transacao: Transacao): Promise<Transacao | null> {
    await this.transacoesRepository.update(id, transacao);
    return this.transacoesRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.transacoesRepository.delete(id);
  }
}
