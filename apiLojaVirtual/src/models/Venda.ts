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
import { Cliente } from "./Cliente";
import { VendaProduto } from "./VendaProduto";

@Table({ timestamps: true })
export class Venda extends Model<Venda> {
  @IsUUID("all")
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV1 })
  id!: string;

  @ForeignKey(() => Cliente)
  @AllowNull(true)
  @Column({ type: DataType.UUID })
  clienteId!: string;

  @AllowNull(false)
  @Column(DataType.DATE)
  data!: Date;

  @BelongsTo(() => Cliente)
  cliente!: Cliente;

  @BelongsToMany(() => Produto, () => VendaProduto)
  produtos!: Produto[];
}
