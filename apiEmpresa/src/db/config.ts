import { Sequelize } from "sequelize-typescript";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "Root@12345",
  database: "empresa",
  logging: false,
});

export default connection;
