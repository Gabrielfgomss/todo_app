import { FormEvent, useContext } from 'react';
import Form from '../components/Form.tsx';
import { FormContext } from '../context/ContextForm.tsx';

export default function SignIn() {
  const context = useContext(FormContext);
  const formData = context?.formData ?? { user: '', password: '' };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <Form
      title="Crie sua conta!"
      buttonAction="Criar conta"
      handleSubmit={handleSubmit}
    />
  );
}
