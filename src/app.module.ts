import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transacao } from './transacoes/transacao.entity';
import { Categoria } from './categorias/categoria.entity';
import { TransacoesModule } from './transacoes/transacoes.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // Ou o host do MySQL da HostGator
      port: 3306,
      username: 'seu_usuario',
      password: 'sua_senha',
      database: 'financeiro_db',
      entities: [Transacao, Categoria],
      synchronize: true, // Cuidado: use apenas em desenvolvimento!
    }),
    TransacoesModule,
    CategoriasModule,
  ],
})
export class AppModule {}
