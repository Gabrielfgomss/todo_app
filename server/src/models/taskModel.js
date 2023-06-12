import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: null,
  },
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
