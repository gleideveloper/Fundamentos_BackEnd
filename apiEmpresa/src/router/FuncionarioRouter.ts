import { Router } from "express";
import Funcionario from "../controllers/Funcionario";

const funcionarioRouter = Router();
//Rotas da entidade funcionário
funcionarioRouter.post("/funcionario/create", Funcionario.create.bind(Funcionario));
funcionarioRouter.get("/funcionario/all", Funcionario.getAll.bind(Funcionario));
funcionarioRouter.get("/funcionario/:id", Funcionario.getById.bind(Funcionario));
funcionarioRouter.put("/funcionario/:id", Funcionario.update.bind(Funcionario));
funcionarioRouter.delete("/funcionario/:id", Funcionario.del.bind(Funcionario));

export default funcionarioRouter;
