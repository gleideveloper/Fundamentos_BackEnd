import { Request, Response } from "express";
import { Categoria } from "../models/Categoria";

// Criar um novo categoria
const create = async (req: Request, res: Response): Promise<Response> => {
  try {
    const novoCategoria: Categoria = await Categoria.create({ ...req.body });
    return res.status(201).json(novoCategoria);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao criar o categoria." });
  }
};

// Listar todos os categorias
const getAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const categorias: Array<Categoria> = await Categoria.findAll();
    return res.status(200).json(categorias);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao listar os categorias." });
  }
};

// Obter um categoria pelo ID
const getById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const categoria: Categoria | null = await Categoria.findOne({ where: { id } });
    if (!categoria) {
      return res.status(404).json({ error: "Categoria não encontrado." });
    }
    return res.status(200).json(categoria);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao obter o categoria." });
  }
};

// Atualizar um categoria
const update = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const updatedCategoria: Categoria | null = await Categoria.findByPk(id);

    if (!updatedCategoria) {
      return res.status(404).json({ error: "Categoria não encontrado." });
    }

    const updatedCategoriaData = await updatedCategoria.update({ ...req.body });

    return res.status(200).json(updatedCategoriaData);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao atualizar o Categoria." });
  }
};

// Excluir um categoria
const del = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const categoria: Categoria | null = await Categoria.findOne({ where: { id } });
    if (!categoria) {
      return res.status(404).json({ error: "Categoria não encontrado." });
    }
    await categoria.destroy();
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: "Erro ao excluir o categoria." });
  }
};

export default { getAll, getById, create, update, del };
