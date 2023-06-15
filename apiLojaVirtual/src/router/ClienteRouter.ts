import { Router } from "express";
import Cliente from "../controllers/Cliente";

const clienteRouter = Router();

//Rotas da entidade funcionário
clienteRouter.post("/cliente/create", Cliente.create.bind(Cliente));
clienteRouter.get("/cliente/all", Cliente.getAll.bind(Cliente));
clienteRouter.get("/cliente/:id", Cliente.getById.bind(Cliente));
clienteRouter.put("/cliente/:id", Cliente.update.bind(Cliente));
clienteRouter.delete("/cliente/:id", Cliente.del.bind(Cliente));

export default clienteRouter;
