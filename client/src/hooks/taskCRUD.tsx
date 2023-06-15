import { useState, useEffect } from 'react';
import { Dayjs } from 'dayjs';
import Cookies from 'js-cookie';
import { createRequest, getRequest, updateRequest } from '../services/api.ts';

const useCrud = () => {
  const [items, setItems] = useState([]);
  const values = Cookies.get('session');

  const fetchData = async () => {
    try {
      if (values) {
        const response = await getRequest(values);
        setItems(response);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const createTask = async (item: {
    content: string;
    date: { $d: Dayjs | null };
  }) => {
    try {
      if (values) {
        await createRequest({
          content: item.content,
          id: values,
          date: item?.date,
        });
      }
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const updateItem = async (task: {
    id: string;
    isFavorite?: boolean;
    isComplete?: boolean;
  }) => {
    try {
      await updateRequest(task);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { items, createTask, updateItem };
};

export default useCrud;
