import { useState, ChangeEvent, createContext, ReactNode } from 'react';

interface FormContextTypes {
  formData: { user: string; password: string };
  // eslint-disable-next-line no-unused-vars
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <FormContext.Provider value={{ formData, handleChange }}>
      {children}
    </FormContext.Provider>
  );
}

export { FormContext, FormContextProvider };
