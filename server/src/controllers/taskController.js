import Task from '../models/taskModel.js';

class taskController {
  static getAll = async (req, res) => {
    try {
      const tasks = await Task.find();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get tasks' });
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
      res.status(500).json({ error: 'Failed to update task status' });
    }
  };

  static createTask = async (req, res) => {
    try {
      const { content, isComplete, isFavorite, date } = req.body;
      const task = new Task({ content, isComplete, isFavorite, date });
      await task.save();
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create task' });
    }
  };
}

export default taskController;
