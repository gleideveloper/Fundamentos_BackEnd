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
} from "sequelize-typescript";

import { Funcionario } from "./Funcionario";
import { Projeto } from "./Projeto";

@Table({ timestamps: true })
export class Departamento extends Model<Departamento> {
  @IsUUID("all")
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV1 })
  id!: string;

  @AllowNull(false)
  @Unique
  @Column({ type: DataType.STRING })
  name!: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  sigla!: string;

  @ForeignKey(() => Funcionario)
  @AllowNull(true)
  @Column({ type: DataType.UUID })
  gestorId!: string;

  @BelongsTo(() => Funcionario, "gestorId")
  gestor!: Funcionario;

  @ForeignKey(() => Projeto)
  @AllowNull(true)
  @Column({ type: DataType.UUID })
  projetoId!: string;

  @HasMany(() => Projeto)
  projetos!: Projeto[];
}
