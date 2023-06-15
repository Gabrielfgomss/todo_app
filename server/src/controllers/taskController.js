import Task from '../models/taskModel.js';

class taskController {
  static getAll = async (req, res) => {
    try {
      const { userId } = req.params;
      const tasks = await Task.find({ user: userId });
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Falha ao encontrar' });
    }
  };

  static updateTask = async (req, res) => {
    try {
      const { taskId } = req.params;
      const { isComplete, isFavorite } = req.body;
      const task = await Task.findByIdAndUpdate(
        taskId,
        { isComplete, isFavorite },
        { new: true }
      );
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Falha ao atualizar' });
    }
  };

  static createTask = async (req, res) => {
    try {
      const { content, user, isComplete, isFavorite, date } = req.body;
      const task = new Task({ content, user, isComplete, isFavorite, date });
      await task.save();
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Falha ao criar' });
    }
  };
}

export default taskController;
