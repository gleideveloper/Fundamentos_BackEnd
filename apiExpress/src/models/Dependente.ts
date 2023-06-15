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

  @ForeignKey(() => Funcionario)
  @AllowNull(false)
  @Column({ type: DataType.UUID })
  funcionarioId!: string;

  @HasOne(() => Funcionario)
  funcionario!: Funcionario;
}
