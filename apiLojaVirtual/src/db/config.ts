import { Sequelize } from "sequelize-typescript";
import { Cliente } from "../models/Cliente";
import { Produto } from "../models/Produto";
import { Categoria } from "../models/Categoria";
import { Venda } from "../models/Venda";
import { VendaProduto } from "../models/VendaProduto";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "Root@12345",
  database: "loja_virtual",
  logging: false,
  models: [Cliente, Produto, Categoria, Venda, VendaProduto],
});

export default connection;
