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
} from "sequelize-typescript";

import { Funcionario } from "./Funcionario";

@Table({ timestamps: true })
export class Dependente extends Model<Dependente> {
  @IsUUID("all")
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV1 })
  id!: string;

  @AllowNull(false)
  @Unique
  @Column({ type: DataType.STRING })
  name!: string;

  @AllowNull(false)
  @Column({ type: DataType.INTEGER })
  idade!: number;

  // @AllowNull(true)
  // @Column({ type: DataType.STRING })
  // atributo_adicionado!: string;

  @ForeignKey(() => Funcionario)
  @AllowNull(false)
  @Column({ type: DataType.UUID })
  funcionarioId!: string;

  @BelongsTo(() => Funcionario)
  funcionario!: Funcionario;
}
