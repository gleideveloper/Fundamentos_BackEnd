import { Request, Response } from "express";
import { Dependente } from "../models/Dependente";

// Criar um novo dependente
const create = async (req: Request, res: Response): Promise<Response> => {
  try {
    const novoDependente: Dependente = await Dependente.create({ ...req.body });
    return res.status(201).json(novoDependente);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao criar o dependente." });
  }
};

// Listar todos os dependentes
const getAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const dependentes: Array<Dependente> = await Dependente.findAll();
    return res.status(200).json(dependentes);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao listar os dependentes." });
  }
};

// Obter um dependente pelo ID
const getById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const dependente: Dependente | null = await Dependente.findOne({ where: { id } });
    if (!dependente) {
      return res.status(404).json({ error: "Dependente não encontrado." });
    }
    return res.status(200).json(dependente);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao obter o dependente." });
  }
};

// Atualizar um dependente
const update = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const updatedDependente: Dependente | null = await Dependente.findByPk(id);

    if (!updatedDependente) {
      return res.status(404).json({ error: "Dependente não encontrado." });
    }

    const updatedDependenteData = await updatedDependente.update({ ...req.body });

    return res.status(200).json(updatedDependenteData);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao atualizar o Dependente." });
  }
};

// Excluir um dependente
const del = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const dependente: Dependente | null = await Dependente.findOne({ where: { id } });
    if (!dependente) {
      return res.status(404).json({ error: "Dependente não encontrado." });
    }
    await dependente.destroy();
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: "Erro ao excluir o dependente." });
  }
};

export default { getAll, getById, create, update, del };
