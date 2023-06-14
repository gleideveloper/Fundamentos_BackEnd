import { Request, Response } from "express";
import { Funcionario } from "../models/Funcionario";

// Listar todos os funcionários
const getAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const funcionarios: Array<Funcionario> = await Funcionario.findAll();
    return res.status(200).json(funcionarios);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao listar os funcionários." });
  }
};

// Obter um funcionário pelo ID
const getById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const funcionario: Funcionario | null = await Funcionario.findOne({ where: { id } });
    if (!funcionario) {
      return res.status(404).json({ error: "Funcionário não encontrado." });
    }
    return res.status(200).json(funcionario);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao obter o funcionário." });
  }
};

// Criar um novo funcionário
const create = async (req: Request, res: Response): Promise<Response> => {
  try {
    const novoFuncionario: Funcionario = await Funcionario.create({ ...req.body });
    return res.status(201).json(novoFuncionario);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao criar o funcionário." });
  }
};

// Atualizar um funcionário
const update = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const updatedFuncionario: Funcionario | null = await Funcionario.findByPk(id);

    if (!updatedFuncionario) {
      return res.status(404).json({ error: "Funcionario não encontrado." });
    }

    const updatedFuncionarioData = await updatedFuncionario.update({ ...req.body });

    return res.status(200).json(updatedFuncionarioData);
  } catch (error) {
    console.log(error); // Imprime o log de erro no console
    return res.status(500).json({ error: "Erro ao atualizar o Funcionario." });
  }
};

// Excluir um funcionário
const del = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const funcionario: Funcionario | null = await Funcionario.findOne({ where: { id } });
    if (!funcionario) {
      return res.status(404).json({ error: "Funcionário não encontrado." });
    }
    await funcionario.destroy();
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: "Erro ao excluir o funcionário." });
  }
};

export default { getAll, getById, create, update, del };
