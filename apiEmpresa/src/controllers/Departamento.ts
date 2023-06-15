import { Request, Response } from "express";
import { Departamento } from "../models/Departamento";

// Criar um novo departamento
const create = async (req: Request, res: Response): Promise<Response> => {
  try {
    const novoDepartamento: Departamento = await Departamento.create({ ...req.body });
    return res.status(201).json(novoDepartamento);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar o funcionário." });
  }
};

// Obter uma lista de departamentos
const getAll = async function (req: Request, res: Response): Promise<Response> {
  const departamentos: Array<Departamento> = await Departamento.findAll();
  return res.status(200).json(departamentos);
};

// Obter um departamento pelo ID
const getById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const departamento: Departamento | null = await Departamento.findByPk(id);
    if (!departamento) {
      return res.status(404).json({ error: "Departamento não encontrado." });
    }
    return res.status(200).json(departamento);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao obter o Departamento." });
  }
};

// Atualizar um departamento
const update = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const updatedDepartamento: Departamento | null = await Departamento.findByPk(id);

    if (!updatedDepartamento) {
      return res.status(404).json({ error: "Departamento não encontrado." });
    }

    const updatedDepartamentoData = await updatedDepartamento.update({ ...req.body });
    //await Departamento.update({ ...req.body }, { where: { id } });
    //const updatedDepartamentoData: Departamento | null = await Departamento.findByPk(id);

    return res.status(200).json(updatedDepartamentoData);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar o departamento." });
  }
};

// Excluir um departamentos
const del = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const departamento: Departamento | null = await Departamento.findOne({ where: { id } });
    if (!departamento) {
      return res.status(404).json({ error: "Departamento não encontrado." });
    }
    await departamento.destroy();
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: "Erro ao excluir departamento." });
  }
};

export default { getAll, getById, create, update, del };
