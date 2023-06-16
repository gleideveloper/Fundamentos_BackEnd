import {
  Table,
  Model,
  Column,
  DataType,
  IsUUID,
  PrimaryKey,
  AllowNull,
  Unique,
  ForeignKey,
  HasOne,
  BelongsTo,
  HasMany,
  BelongsToMany,
} from "sequelize-typescript";

import { Produto } from "./Produto";
import { Venda } from "./Venda";

@Table({ timestamps: true })
export class VendaProduto extends Model<VendaProduto> {
  @IsUUID("all")
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV1 })
  id!: string;

  @ForeignKey(() => Venda)
  @AllowNull(false)
  @Column(DataType.UUID)
  vendaId!: string;

  @ForeignKey(() => Produto)
  @AllowNull(false)
  @Column(DataType.UUID)
  produtoId!: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  quantidade!: number;

  @BelongsTo(() => Venda)
  venda!: Venda;

  @BelongsTo(() => Produto)
  produto!: Produto;
}
