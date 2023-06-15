import { Router } from "express";
import FuncionarioRouter from "./FuncionarioRouter";
import DepartamentoRouter from "./DepartamentoRouter";
import DependenteRouter from "./DependenteRouter";
import ProjetoRouter from "./ProjetoRouter";

const router = Router();

router.use(FuncionarioRouter);
router.use(DepartamentoRouter);
router.use(DependenteRouter);
router.use(ProjetoRouter);

export default router;
