import { Router } from "express";
import Dependente from "../controllers/Dependente";

const dependenteRouter = Router();

//Rotas da entidade funcionário
dependenteRouter.post("/dependente/create", Dependente.create.bind(Dependente));
dependenteRouter.get("/dependente/all", Dependente.getAll.bind(Dependente));
dependenteRouter.get("/dependente/:id", Dependente.getById.bind(Dependente));
dependenteRouter.put("/dependente/:id", Dependente.update.bind(Dependente));
dependenteRouter.delete("/dependente/:id", Dependente.del.bind(Dependente));

export default dependenteRouter;
