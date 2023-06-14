import { Sequelize } from "sequelize-typescript";
import { Funcionario } from "../models/Funcionario";
import { Departamento } from "../models/Departamento";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "Root@12345",
  database: "empresa",
  logging: false,
  models: [Funcionario, Departamento],
});

export default connection;
