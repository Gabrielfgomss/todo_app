import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { Dayjs } from 'dayjs';
import { getItems } from '../services/api.ts';

interface ContextListType {
  sortMethod: string;
  // eslint-disable-next-line no-unused-vars
  updateLista: (newValue: string) => void;
  items: {
    _id: string;
    content: string;
    date: Dayjs | null;
    isComplete: boolean;
    isFavorite: boolean;
  }[];
  wasClicked: boolean;
  setWasClicked: Dispatch<SetStateAction<boolean>>;
}

const ContextList = createContext<ContextListType | undefined>(undefined);

interface MyContextProviderProps {
  children: ReactNode;
}

function MyContextProvider({ children }: MyContextProviderProps) {
  const [items, setItems] = useState([]);
  const [wasClicked, setWasClicked] = useState(false);
  const [sortMethod, setSortMethod] = useState('Tasks');
  const updateLista = (newValue: string) => {
    setSortMethod(newValue);
  };
  const callApi = async () => {
    const response = await getItems();
    setItems(response);
  };
  useEffect(() => {
    callApi();
  }, [wasClicked]);
  return (
    <ContextList.Provider
      value={{ sortMethod, updateLista, items, wasClicked, setWasClicked }}
    >
      {children}
    </ContextList.Provider>
  );
}

export { ContextList, MyContextProvider };
