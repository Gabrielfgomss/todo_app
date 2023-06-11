import { createContext, useState, ReactNode } from 'react';

interface MyContextType {
  sortMethod: string;
  updateLista: (newValue: string) => void;
  items: [{content: string, type: string, status: boolean, favorite: boolean}]
}

const ContextList = createContext<MyContextType | undefined>(undefined);

interface MyContextProviderProps {
  children: ReactNode;
}

const MyContextProvider = ({ children }: MyContextProviderProps) => {

  const items = [
    {
      content: 'Tarefa',
      type: 'track',
      status: false,
      favorite: false
    },
    {
      content: 'Tarefa',
      type: 'unTracked',
      status: false,
      favorite: false
    },
    {
      content: 'Tarefa',
      type: 'unTracked',
      status: false,
      favorite: true
    },
    {
      content: 'Tarefa',
      type: 'track',
      status: false,
      favorite: true
    },
    {
      content: 'Tarefa',
      type: 'track',
      status: false,
      favorite: true
    },
    {
      content: 'Tarefa',
      type: 'unTracked',
      status: false,
      favorite: true
    },
    {
      content: 'Tarefa',
      type: 'unTracked',
      status: false,
      favorite: true
    },
    {
      content: 'Tarefa',
      type: 'track',
      status: false,
      favorite: true
    },
    {
      content: 'Tarefa',
      type: 'track',
      status: false,
      favorite: true
    },
    {
      content: 'Tarefa',
      type: 'unTracked',
      status: false,
      favorite: true
    },
    {
      content: 'Tarefa',
      type: 'track',
      status: false,
      favorite: true
    },
    {
      content: 'Tarefa',
      type: 'unTracked',
      status: false,
      favorite: true
    },
    {
      content: 'Tarefa',
      type: 'track',
      status: false,
      favorite: true
    },
    {
      content: 'Tarefa',
      type: 'track',
      status: true,
      favorite: true
    },
    {
      content: 'Tarefa',
      type: 'unTracked',
      status: true,
      favorite: false
    },
  ]
  
  const [sortMethod, setSortMethod] = useState('Tasks');

  const updateLista = (newValue: string) => {
    setSortMethod(newValue);
  };

  return (
    <ContextList.Provider value={{ sortMethod, updateLista, items }}>
      {children}
    </ContextList.Provider>
  );
};

export { ContextList, MyContextProvider };