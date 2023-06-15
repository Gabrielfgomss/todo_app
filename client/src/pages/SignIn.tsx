import { FormEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Form from '../components/Form.tsx';
import { FormContext } from '../context/ContextForm.tsx';
import useUserCrud from '../hooks/userCRUD.tsx';

export default function SignIn() {
  const { createUser } = useUserCrud();
  const context = useContext(FormContext);
  const formData = context?.formData ?? { user: '', password: '' };
  const setForm = context?.setFormData;
  const formError = context?.error;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const setFormError = context?.setError ?? (() => {});

  const navigate = useNavigate();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await createUser({
        user: formData.user,
        password: formData.password,
      });
      Cookies.set('session', response.userCreated._id);
      if (setForm)
        setForm({
          user: '',
          password: '',
        });
      setFormError(() => ({
        passwordError: false,
        passwordMessage: '',
        userError: false,
        userMessage: '',
      }));
      navigate('/dashboard');
    } catch (error: any) {
      if (setFormError) {
        setFormError((prevState) => ({
          ...prevState,
          userError: true,
          userMessage: error.message,
        }));
      }
    }
  };

  return (
    <Form
      title="Crie sua conta!"
      buttonAction="Criar conta"
      handleSubmit={handleSubmit}
      userError={formError?.userError}
      userMessage={formError?.userMessage}
      setFormError={setFormError}
    />
  );
}
