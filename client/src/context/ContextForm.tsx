import {
  useState,
  ChangeEvent,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useMemo,
  useCallback,
} from 'react';

interface FormContextTypes {
  formData: { user: string; password: string };
  setFormData: Dispatch<
    SetStateAction<{
      user: string;
      password: string;
    }>
  >;
  // eslint-disable-next-line no-unused-vars
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error: {
    userError: boolean;
    passwordError: boolean;
    userMessage: string;
    passwordMessage: string;
  };
  setError:
    | Dispatch<
        SetStateAction<{
          userError: boolean;
          passwordError: boolean;
          userMessage: string;
          passwordMessage: string;
        }>
      >
    | undefined;
}

const FormContext = createContext<FormContextTypes | undefined>(undefined);

interface MyContextProviderProps {
  children: ReactNode;
}

function FormContextProvider({ children }: MyContextProviderProps) {
  const [formData, setFormData] = useState({
    user: '',
    password: '',
  });
  const [error, setError] = useState<{
    userError: boolean;
    passwordError: boolean;
    userMessage: string;
    passwordMessage: string;
  }>({
    userError: false,
    passwordError: false,
    userMessage: '',
    passwordMessage: '',
  });

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }, []);
  const contextValue = useMemo(
    () => ({
      formData,
      setFormData,
      handleChange,
      error,
      setError,
    }),
    [formData, setFormData, handleChange, error, setError]
  );
  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
}

export { FormContext, FormContextProvider };
