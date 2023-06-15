import { Request, Response } from "express";
import { Cliente } from "../models/Cliente";

// Criar um novo cliente
const create = async (req: Request, res: Response): Promise<Response> => {
  try {
    const novoCliente: Cliente = await Cliente.create({ ...req.body });
    return res.status(201).json(novoCliente);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao criar o cliente." });
  }
};

// Listar todos os clientes
const getAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const clientes: Array<Cliente> = await Cliente.findAll();
    return res.status(200).json(clientes);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao listar os clientes." });
  }
};

// Obter um cliente pelo ID
const getById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const cliente: Cliente | null = await Cliente.findOne({ where: { id } });
    if (!cliente) {
      return res.status(404).json({ error: "Cliente não encontrado." });
    }
    return res.status(200).json(cliente);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao obter o cliente." });
  }
};

// Atualizar um cliente
const update = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const updatedCliente: Cliente | null = await Cliente.findByPk(id);

    if (!updatedCliente) {
      return res.status(404).json({ error: "Cliente não encontrado." });
    }

    const updatedClienteData = await updatedCliente.update({ ...req.body });

    return res.status(200).json(updatedClienteData);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao atualizar o Cliente." });
  }
};

// Excluir um cliente
const del = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const cliente: Cliente | null = await Cliente.findOne({ where: { id } });
    if (!cliente) {
      return res.status(404).json({ error: "Cliente não encontrado." });
    }
    await cliente.destroy();
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: "Erro ao excluir o cliente." });
  }
};

export default { getAll, getById, create, update, del };
