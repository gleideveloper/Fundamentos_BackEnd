import { Router } from "express";
import Venda from "../controllers/Venda";

const vendaRouter = Router();

//Rotas da entidade funcionário
vendaRouter.post("/venda/create", Venda.create.bind(Venda));
vendaRouter.get("/venda/all", Venda.getAll.bind(Venda));
vendaRouter.get("/venda/:id", Venda.getById.bind(Venda));
vendaRouter.put("/venda/:id", Venda.update.bind(Venda));
vendaRouter.delete("/venda/:id", Venda.del.bind(Venda));

export default vendaRouter;
