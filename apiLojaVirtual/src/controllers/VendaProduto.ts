import { Request, Response } from "express";
import { VendaProduto } from "../models/VendaProduto";

// Criar um novo vendaProduto
const create = async (req: Request, res: Response): Promise<Response> => {
  try {
    const novoVendaProduto: VendaProduto = await VendaProduto.create({ ...req.body });
    return res.status(201).json(novoVendaProduto);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao criar o vendaProduto." });
  }
};

// Listar todos os vendaProduto
const getAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const vendaProduto: Array<VendaProduto> = await VendaProduto.findAll();
    return res.status(200).json(vendaProduto);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao listar os vendaProduto." });
  }
};

// Obter um vendaProduto pelo ID
const getById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const vendaProduto: VendaProduto | null = await VendaProduto.findOne({ where: { id } });
    if (!vendaProduto) {
      return res.status(404).json({ error: "VendaProduto não encontrado." });
    }
    return res.status(200).json(vendaProduto);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao obter o vendaProduto." });
  }
};

// Atualizar um vendaProduto
const update = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const updatedVendaProduto: VendaProduto | null = await VendaProduto.findByPk(id);

    if (!updatedVendaProduto) {
      return res.status(404).json({ error: "VendaProduto não encontrado." });
    }

    const updatedVendaProdutoData = await updatedVendaProduto.update({ ...req.body });

    return res.status(200).json(updatedVendaProdutoData);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao atualizar o VendaProduto." });
  }
};

// Excluir um vendaProduto
const del = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const vendaProduto: VendaProduto | null = await VendaProduto.findOne({ where: { id } });
    if (!vendaProduto) {
      return res.status(404).json({ error: "VendaProduto não encontrado." });
    }
    await vendaProduto.destroy();
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: "Erro ao excluir o vendaProduto." });
  }
};

export default { getAll, getById, create, update, del };
