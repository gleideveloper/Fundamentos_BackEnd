import { Request, Response } from "express";
import { Produto } from "../models/Produto";
import { VendaProduto } from "../models/VendaProduto";

// Criar um novo produto
const create = async (req: Request, res: Response): Promise<Response> => {
  try {
    const novoProduto: Produto = await Produto.create({ ...req.body });
    return res.status(201).json(novoProduto);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar o funcionário." });
  }
};

// Obter uma lista de produtos
const getAll = async function (req: Request, res: Response): Promise<Response> {
  const produtos: Array<Produto> = await Produto.findAll();
  return res.status(200).json(produtos);
};

// Obter um produto pelo ID
const getById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const produto: Produto | null = await Produto.findByPk(id);
    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado." });
    }
    return res.status(200).json(produto);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao obter o Produto." });
  }
};

// Atualizar um produto
const update = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const updatedProduto: Produto | null = await Produto.findByPk(id);

    if (!updatedProduto) {
      return res.status(404).json({ error: "Produto não encontrado." });
    }

    const updatedProdutoData = await updatedProduto.update({ ...req.body });

    return res.status(200).json(updatedProdutoData);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar o produto." });
  }
};

// Excluir um produto
const del = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const produto: Produto | null = await Produto.findOne({ where: { id } });
    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado." });
    }
    await produto.destroy();
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: "Erro ao excluir produto." });
  }
};

export default { getAll, getById, create, update, del };
