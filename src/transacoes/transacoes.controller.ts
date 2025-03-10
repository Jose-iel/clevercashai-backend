import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TransacoesService } from './transacoes.service';
import { Transacao } from './transacao.entity';

@Controller('transacoes')
export class TransacoesController {
  constructor(private readonly transacoesService: TransacoesService) {}

  @Get()
  findAll(): Promise<Transacao[]> {
    return this.transacoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Transacao | null> {
    return this.transacoesService.findOne(id);
  }

  @Post()
  create(@Body() transacao: Transacao): Promise<Transacao> {
    return this.transacoesService.create(transacao);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() transacao: Transacao,
  ): Promise<Transacao | null> {
    return this.transacoesService.update(id, transacao);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.transacoesService.remove(id);
  }
}
