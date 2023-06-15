import {
  Table,
  Model,
  Column,
  DataType,
  IsUUID,
  PrimaryKey,
  AllowNull,
  IsEmail,
  Unique,
  ForeignKey,
  BelongsTo,
  HasOne,
  HasMany,
  BelongsToMany,
} from "sequelize-typescript";

import { Categoria } from "./Categoria";
import { Venda } from "./Venda";

@Table({ timestamps: true })
export class Produto extends Model<Produto> {
  @IsUUID("all")
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV1 })
  id!: string;

  @AllowNull(true)
  @Column({ type: DataType.STRING })
  descricao!: string;

  @AllowNull(true)
  @Column({ type: DataType.DECIMAL(10, 2) })
  preco!: number;

  @AllowNull(true)
  @Column({ type: DataType.NUMBER })
  quantidade!: number;

  @ForeignKey(() => Categoria)
  @AllowNull(true)
  @Column({ type: DataType.UUID })
  categoriaId!: string;

  @BelongsTo(() => Categoria)
  categoria!: Categoria;

  // @ForeignKey(() => Venda)
  // @AllowNull(true)
  // @Column({ type: DataType.UUID })
  // vendaId!: string;

  @BelongsToMany(() => Venda, () => ProdutoVenda)
  vendas!: Venda[];
}
