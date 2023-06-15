import { Router } from "express";
import Projeto from "../controllers/Projeto";

const projetoRouter = Router();

//Rotas da entidade funcionário
projetoRouter.post("/projeto/create", Projeto.create.bind(Projeto));
projetoRouter.get("/projeto/all", Projeto.getAll.bind(Projeto));
projetoRouter.get("/projeto/:id", Projeto.getById.bind(Projeto));
projetoRouter.put("/projeto/:id", Projeto.update.bind(Projeto));
projetoRouter.delete("/projeto/:id", Projeto.del.bind(Projeto));

export default projetoRouter;
