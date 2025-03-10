import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Transacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column('decimal', { precision: 10, scale: 2 })
  valor: number;

  @Column()
  tipo: 'receita' | 'despesa';

  @Column()
  data: string;

  @Column()
  categoria: string;

  @Column()
  categoriaId: number;

  @Column()
  mes: number;

  @Column()
  ano: number;
}
