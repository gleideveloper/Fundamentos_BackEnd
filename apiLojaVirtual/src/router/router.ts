import { Router } from "express";
import Produto from "../controllers/Produto";
import Venda from "../controllers/Categoria";
import Categoria from "../controllers/Cliente";
import Cliente from "../controllers/Venda";

const router = Router();

//Rotas da entidade produto
router.post("/produto/create", Produto.create);
router.get("/produto/all", Produto.getAll);
router.get("/produto/:id", Produto.getById);
router.put("/produto/:id", Produto.update);
router.delete("/produto/:id", Produto.del);

//Rotas da entidade venda
router.post("/venda/create", Venda.create);
router.get("/venda/all", Venda.getAll);
router.get("/venda/:id", Venda.getById);
router.put("/venda/:id", Venda.update);
router.delete("/venda/:id", Venda.del);

//Rotas da entidade categoria
router.post("/categoria/create", Categoria.create);
router.get("/categoria/all", Categoria.getAll);
router.get("/categoria/:id", Categoria.getById);
router.put("/categoria/:id", Categoria.update);
router.delete("/categoria/:id", Categoria.del);

//Rotas da entidade dependente
router.post("/cliente/create", Cliente.create);
router.get("/cliente/all", Cliente.getAll);
router.get("/cliente/:id", Cliente.getById);
router.put("/cliente/:id", Cliente.update);
router.delete("/cliente/:id", Cliente.del);

export default router;
