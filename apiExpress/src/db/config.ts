import { Sequelize } from "sequelize-typescript";
import { Funcionario } from "../models/Funcionario";
import { Departamento } from "../models/Departamento";
import { Dependente } from "../models/Dependente";
import { Projeto } from "../models/Projeto";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "Root@12345",
  database: "empresa",
  logging: false,
  models: [Funcionario, Departamento, Dependente, Projeto],
});

export default connection;
