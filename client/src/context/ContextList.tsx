import {
  createContext,
  useState,
  ReactNode,
  useMemo,
  useCallback,
} from 'react';

interface ContextListType {
  sortMethod: string;
  // eslint-disable-next-line no-unused-vars
  updateLista: (newValue: string) => void;
}

const ContextList = createContext<ContextListType | undefined>(undefined);

interface MyContextProviderProps {
  children: ReactNode;
}

function MyContextProvider({ children }: MyContextProviderProps) {
  const [sortMethod, setSortMethod] = useState('Tasks');
  const updateLista = useCallback((newValue: string) => {
    setSortMethod(newValue);
  }, []);
  const contextValues = useMemo(
    () => ({
      sortMethod,
      updateLista,
    }),
    [sortMethod, updateLista]
  );

  return (
    <ContextList.Provider value={contextValues}>
      {children}
    </ContextList.Provider>
  );
}

export { ContextList, MyContextProvider };
