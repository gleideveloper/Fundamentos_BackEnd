import { Router } from "express";
import Funcionario from "../controllers/Funcionario";
import Departamento from "../controllers/Departamento";

const router = Router();

//Rotas da entidade funcionário
router.get("/funcionario/all", Funcionario.getAll);
router.get("/funcionario/:id", Funcionario.getById);
router.post("/funcionario/create", Funcionario.create);
router.put("/funcionario/:id", Funcionario.update);
router.delete("/funcionario/:id", Funcionario.del);
//Rotas da entidade departamento
router.get("/departamento/all", Departamento.getAll);
router.get("/departamento/:id", Departamento.getById);
router.post("/departamento/create", Departamento.create);
router.put("/departamento/:id", Departamento.update);
router.delete("/departamento/:id", Departamento.del);

export default router;
