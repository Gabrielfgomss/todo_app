import { Dayjs } from 'dayjs';
import request from './index.ts';

interface createTaskType {
  content: string;
  date?: Dayjs | null;
}

interface updateTaskType {
  id: string;
  isFavorite?: boolean;
  isComplete?: boolean;
}

// const callAPI = {
//   createTask(object: createTaskType) {
//     console.log(object);
//     request.post('/tasks', {
//       content: object.content,
//       date: object.date?.$d || null,
//     });
//   },
//   async getItems() {
//     const response = await request.get('/tasks');
//     return response.data;
//   },
//   async updateItem({ id, isFavorite, isComplete }: updateTaskType) {
//     request.patch(`/tasks/${id}`, {
//       isFavorite,
//       isComplete,
//     });
//   },
// };

const createTask = (object: createTaskType) => {
  console.log(object);
  request.post('/tasks', {
    content: object.content,
    date: object.date?.$d || null,
  });
};

const getItems = async () => {
  const response = await request.get('/tasks');
  return response.data;
};

const updateItem = async ({ id, isFavorite, isComplete }: updateTaskType) => {
  request.patch(`/tasks/${id}`, {
    isFavorite,
    isComplete,
  });
};
export { createTask, getItems, updateItem };
