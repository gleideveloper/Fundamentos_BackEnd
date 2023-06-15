import { Router } from "express";
import clienteRouter from "./ClienteRouter";
import categoriaRouter from "./CategoriaRouter";
import produtoRouter from "./ProdutoRouter";
import vendaRouter from "./VendaRouter";

const router = Router();

router.use(clienteRouter);
router.use(categoriaRouter);
router.use(produtoRouter);
router.use(vendaRouter);

export default router;
