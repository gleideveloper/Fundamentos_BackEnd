import { Router } from "express";
import Categoria from "../controllers/Categoria";

const categoriaRouter = Router();

//Rotas da entidade funcionário
categoriaRouter.post("/categoria/create", Categoria.create.bind(Categoria));
categoriaRouter.get("/categoria/all", Categoria.getAll.bind(Categoria));
categoriaRouter.get("/categoria/:id", Categoria.getById.bind(Categoria));
categoriaRouter.put("/categoria/:id", Categoria.update.bind(Categoria));
categoriaRouter.delete("/categoria/:id", Categoria.del.bind(Categoria));

export default categoriaRouter;
