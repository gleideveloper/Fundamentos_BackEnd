import { Router } from "express";
import Departamento from "../controllers/Departamento";

const departamentoRouter = Router();

//Rotas da entidade funcionário
departamentoRouter.post("/departamento/create", Departamento.create.bind(Departamento));
departamentoRouter.get("/departamento/all", Departamento.getAll.bind(Departamento));
departamentoRouter.get("/departamento/:id", Departamento.getById.bind(Departamento));
departamentoRouter.put("/departamento/:id", Departamento.update.bind(Departamento));
departamentoRouter.delete("/departamento/:id", Departamento.del.bind(Departamento));

export default departamentoRouter;
