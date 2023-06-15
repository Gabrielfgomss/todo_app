import { Dayjs } from 'dayjs';
import request from './index.ts';

interface createTaskType {
  content: string;
  id: string;
  date?: {
    $d: Dayjs | null;
  };
}

interface updateTaskType {
  id: string;
  isFavorite?: boolean;
  isComplete?: boolean;
}

const createRequest = async (object: createTaskType) => {
  const response = await request.post('/tasks', {
    content: object.content,
    user: object.id,
    date: object.date?.$d || null,
  });
  return response.data;
};

const getRequest = async (id: string) => {
  const response = await request.get(`/tasks/${id}`);
  return response.data;
};

const updateRequest = async ({
  id,
  isFavorite,
  isComplete,
}: updateTaskType) => {
  const response = await request.patch(`/tasks/${id}`, {
    isFavorite,
    isComplete,
  });
  return response.data;
};

const createUserRequest = async ({
  user,
  password,
}: {
  user: string;
  password: string;
}) => {
  try {
    const response = await request.post('/users', {
      user,
      password,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message);
  }
};

const getUserRequest = async (user: { user: string; password: string }) => {
  try {
    const response = await request.post('/auth/user', {
      name: user.user,
      password: user.password,
    });
    return response.data;
  } catch (error: any) {
    return error.response?.data;
  }
};

export {
  createRequest,
  getRequest,
  updateRequest,
  createUserRequest,
  getUserRequest,
};
