import { Request, Response } from "express";
import { Venda } from "../models/Venda";

// Criar um novo venda
const create = async (req: Request, res: Response): Promise<Response> => {
  try {
    const novoVenda: Venda = await Venda.create({ ...req.body });
    return res.status(201).json(novoVenda);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao criar o venda." });
  }
};

// Listar todos os vendas
const getAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const vendas: Array<Venda> = await Venda.findAll();
    return res.status(200).json(vendas);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao listar os vendas." });
  }
};

// Obter um venda pelo ID
const getById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const venda: Venda | null = await Venda.findOne({ where: { id } });
    if (!venda) {
      return res.status(404).json({ error: "Venda não encontrado." });
    }
    return res.status(200).json(venda);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao obter o venda." });
  }
};

// Atualizar um venda
const update = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const updatedVenda: Venda | null = await Venda.findByPk(id);

    if (!updatedVenda) {
      return res.status(404).json({ error: "Venda não encontrado." });
    }

    const updatedVendaData = await updatedVenda.update({ ...req.body });

    return res.status(200).json(updatedVendaData);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao atualizar o Venda." });
  }
};

// Excluir um venda
const del = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const venda: Venda | null = await Venda.findOne({ where: { id } });
    if (!venda) {
      return res.status(404).json({ error: "Venda não encontrado." });
    }
    await venda.destroy();
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: "Erro ao excluir o venda." });
  }
};

export default { getAll, getById, create, update, del };
