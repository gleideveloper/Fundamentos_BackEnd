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
} from "sequelize-typescript";

@Table({ timestamps: true })
export class Cliente extends Model<Cliente> {
  @IsUUID("all")
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV1 })
  id!: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  nome!: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  endereco!: string;

  @AllowNull(false)
  @Unique
  @IsEmail
  @Column({ type: DataType.STRING })
  email!: string;
}
