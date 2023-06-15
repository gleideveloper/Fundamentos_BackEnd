import { Router } from "express";
import Produto from "../controllers/Produto";

const produtoRouter = Router();

//Rotas da entidade funcionário
produtoRouter.post("/produto/create", Produto.create.bind(Produto));
produtoRouter.get("/produto/all", Produto.getAll.bind(Produto));
produtoRouter.get("/produto/:id", Produto.getById.bind(Produto));
produtoRouter.put("/produto/:id", Produto.update.bind(Produto));
produtoRouter.delete("/produto/:id", Produto.del.bind(Produto));

export default produtoRouter;
