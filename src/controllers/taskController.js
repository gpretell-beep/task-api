import { prisma } from '../config/prisma.js';

export const getAllTasks = async (req, res) => {
  const tasks = await prisma.task.findMany({ orderBy: { id: 'asc' } });
  res.json(tasks);
};

export const getTaskById = async (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    return res.status(400).json({
      error: "Validation failed",
      details: ["ID must be a number"]
    });
  }
  const task = await prisma.task.findUnique({ where: { id: Number(id) } });
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
};
