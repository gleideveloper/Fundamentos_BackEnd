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

import { Departamento } from "./Departamento";

@Table({ timestamps: true })
export class Projeto extends Model<Projeto> {
  @IsUUID("all")
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV1 })
  id!: string;

  @AllowNull(false)
  @Unique
  @Column({ type: DataType.STRING })
  name!: string;

  @ForeignKey(() => Departamento)
  @AllowNull(false)
  @Column({ type: DataType.UUID })
  departamentoId!: string;

  @HasOne(() => Departamento)
  departamento!: Departamento;
}
