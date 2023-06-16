import { Router } from "express";
import VendaProduto from "../controllers/VendaProduto";

const vendaProdutoRouter = Router();

//Rotas da entidade funcionário
vendaProdutoRouter.post("/vendaProduto/create", VendaProduto.create.bind(VendaProduto));
vendaProdutoRouter.get("/vendaProduto/all", VendaProduto.getAll.bind(VendaProduto));
vendaProdutoRouter.get("/vendaProduto/:id", VendaProduto.getById.bind(VendaProduto));
vendaProdutoRouter.put("/vendaProduto/:id", VendaProduto.update.bind(VendaProduto));
vendaProdutoRouter.delete("/vendaProduto/:id", VendaProduto.del.bind(VendaProduto));

export default vendaProdutoRouter;
