import { createContext, useState, ReactNode, useEffect } from 'react';
import { Dayjs } from 'dayjs';
import { getItems } from '../services/api.ts';

interface ContextListType {
  sortMethod: string;
  // eslint-disable-next-line no-unused-vars
  updateLista: (newValue: string) => void;
  items: {
    content: string;
    date: Dayjs | null;
    isComplete: boolean;
    isFavorite: boolean;
  }[];
}

const ContextList = createContext<ContextListType | undefined>(undefined);

interface MyContextProviderProps {
  children: ReactNode;
}

function MyContextProvider({ children }: MyContextProviderProps) {
  const [items, setItems] = useState([]);
  const [sortMethod, setSortMethod] = useState('Tasks');

  const updateLista = (newValue: string) => {
    setSortMethod(newValue);
  };

  useEffect(() => {
    (async () => {
      const response = await getItems();
      setItems(response);
    })();
  }, []);

  return (
    <ContextList.Provider value={{ sortMethod, updateLista, items }}>
      {children}
    </ContextList.Provider>
  );
}

export { ContextList, MyContextProvider };
