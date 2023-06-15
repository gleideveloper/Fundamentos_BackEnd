import { Request, Response } from "express";
import { Projeto } from "../models/Projeto";

// Criar um novo projeto
const create = async (req: Request, res: Response): Promise<Response> => {
  try {
    const novoProjeto: Projeto = await Projeto.create({ ...req.body });
    return res.status(201).json(novoProjeto);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao criar o projeto." });
  }
};

// Listar todos os projetos
const getAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const projetos: Array<Projeto> = await Projeto.findAll();
    return res.status(200).json(projetos);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao listar os projetos." });
  }
};

// Obter um projeto pelo ID
const getById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const projeto: Projeto | null = await Projeto.findOne({ where: { id } });
    if (!projeto) {
      return res.status(404).json({ error: "Projeto não encontrado." });
    }
    return res.status(200).json(projeto);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao obter o projeto." });
  }
};

// Atualizar um projeto
const update = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const updatedProjeto: Projeto | null = await Projeto.findByPk(id);

    if (!updatedProjeto) {
      return res.status(404).json({ error: "Projeto não encontrado." });
    }

    const updatedProjetoData = await updatedProjeto.update({ ...req.body });

    return res.status(200).json(updatedProjetoData);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao atualizar o Projeto." });
  }
};

// Excluir um projeto
const del = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const projeto: Projeto | null = await Projeto.findOne({ where: { id } });
    if (!projeto) {
      return res.status(404).json({ error: "Projeto não encontrado." });
    }
    await projeto.destroy();
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: "Erro ao excluir o projeto." });
  }
};

export default { getAll, getById, create, update, del };
