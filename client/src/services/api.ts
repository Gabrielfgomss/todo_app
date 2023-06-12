import { Dayjs } from 'dayjs';
import request from './index.ts';

interface ObjectType {
  content: string;
  date?: Dayjs | null;
}

const createTask = (object: ObjectType) => {
  console.log(object);
  request.post('/tasks', {
    content: object.content,
    date: object?.date.$d || null,
  });
};

const getItems = async () => {
  const response = await request.get('/tasks');
  return response.data;
};

export { createTask, getItems };
