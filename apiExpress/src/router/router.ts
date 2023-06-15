import { Router } from "express";
import Funcionario from "../controllers/Funcionario";
import Departamento from "../controllers/Departamento";
import Projeto from "../controllers/Projeto";
import Dependente from "../controllers/Dependente";

const router = Router();

//Rotas da entidade funcionário
router.post("/funcionario/create", Funcionario.create);
router.get("/funcionario/all", Funcionario.getAll);
router.get("/funcionario/:id", Funcionario.getById);
router.put("/funcionario/:id", Funcionario.update);
router.delete("/funcionario/:id", Funcionario.del);

//Rotas da entidade departamento
router.post("/departamento/create", Departamento.create);
router.get("/departamento/all", Departamento.getAll);
router.get("/departamento/:id", Departamento.getById);
router.put("/departamento/:id", Departamento.update);
router.delete("/departamento/:id", Departamento.del);

//Rotas da entidade projeto
router.post("/projeto/create", Projeto.create);
router.get("/projeto/all", Projeto.getAll);
router.get("/projeto/:id", Projeto.getById);
router.put("/projeto/:id", Projeto.update);
router.delete("/projeto/:id", Projeto.del);

//Rotas da entidade dependente
router.post("/dependente/create", Dependente.create);
router.get("/dependente/all", Dependente.getAll);
router.get("/dependente/:id", Dependente.getById);
router.put("/dependente/:id", Dependente.update);
router.delete("/dependente/:id", Dependente.del);

export default router;
