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

@Table({ timestamps: true })
export class Categoria extends Model<Categoria> {
  @IsUUID("all")
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV1 })
  id!: string;

  @AllowNull(true)
  @Unique
  @Column({ type: DataType.STRING })
  descricao!: string;
}
