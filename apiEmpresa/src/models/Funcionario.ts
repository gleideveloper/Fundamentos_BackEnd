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
  HasMany,
  HasOne,
  BelongsTo,
} from "sequelize-typescript";
import { Departamento } from "./Departamento";
import { Dependente } from "./Dependente";
@Table({ timestamps: true })
export class Funcionario extends Model<Funcionario> {
  @IsUUID("all")
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV1 })
  id!: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  name!: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  fone!: string;

  @AllowNull(false)
  @Unique
  @IsEmail
  @Column({ type: DataType.STRING })
  email!: string;

  @AllowNull(false)
  @Column({ type: DataType.INTEGER })
  idade!: number;

  @ForeignKey(() => Departamento)
  @AllowNull(false)
  @Column({ type: DataType.UUID })
  departamentoId!: string;

  @BelongsTo(() => Departamento)
  departamento!: Departamento;

  @HasMany(() => Dependente)
  dependentes!: Dependente[];
}
