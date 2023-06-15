import { createUserRequest, getUserRequest } from '../services/api.ts';

const useUserCrud = () => {
  const getUser = async (user: { user: string; password: string }) => {
    const response = await getUserRequest(user);
    return response;
  };

  const createUser = async (user: { user: string; password: string }) => {
    const response = await createUserRequest(user);
    return response;
  };
  return { getUser, createUser };
};

export default useUserCrud;
