import { Router } from "express";
import funcionarioRouter from "./FuncionarioRouter";
import departamentoRouter from "./DepartamentoRouter";
import dependenteRouter from "./DependenteRouter";
import projetoRouter from "./ProjetoRouter";

const router = Router();

router.use(funcionarioRouter);
router.use(departamentoRouter);
router.use(dependenteRouter);
router.use(projetoRouter);

export default router;
