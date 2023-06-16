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
import { VendaProduto } from "./VendaProduto";

@Table({ timestamps: true })
export class Produto extends Model<Produto> {
  @IsUUID("all")
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV1 })
  id!: string;

  @Column(DataType.STRING)
  descricao!: string;

  @Column(DataType.DECIMAL(10, 2))
  preco!: number;

  @Column(DataType.INTEGER)
  quantidade!: number;

  @ForeignKey(() => Categoria)
  @Column(DataType.UUID)
  categoriaId!: number;

  @BelongsTo(() => Categoria)
  categoria!: Categoria;
}
