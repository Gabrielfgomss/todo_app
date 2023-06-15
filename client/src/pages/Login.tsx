import { FormEvent, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Form from '../components/Form.tsx';
import { FormContext } from '../context/ContextForm.tsx';
import useUserCrud from '../hooks/userCRUD.tsx';

export default function Login() {
  const { getUser } = useUserCrud();
  const context = useContext(FormContext);
  const formData = context?.formData ?? { user: '', password: '' };
  const setData = context?.setFormData;
  const formError = context?.error;
  const setFormError = context?.setError;

  const navigate = useNavigate();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await getUser(formData);

    if (response.exists) {
      Cookies.set('session', response.user._id);
      if (setData)
        setData({
          user: '',
          password: '',
        });
      navigate('/dashboard');
    } else if (!response.exist && setFormError) {
      setFormError(() => ({
        passwordError: false,
        passwordMessage: '',
        userError: true,
        userMessage: response.message,
      }));
    } else if (response.exist && setFormError && response.message !== '') {
      setFormError(() => ({
        userError: false,
        userMessage: '',
        passwordError: true,
        passwordMessage: response.message,
      }));
    }
  };

  return (
    <Form
      title="Faça seu login!"
      buttonAction="Login"
      handleSubmit={handleSubmit}
      userError={formError?.userError}
      userMessage={formError?.userMessage}
      passwordError={formError?.passwordError}
      passwordMessage={formError?.passwordMessage}
      setFormError={setFormError}
    >
      <p className="text-text text-center">
        Ou crie sua{' '}
        <Link to="/signin" className="hover:font-medium underline">
          conta aqui!
        </Link>
      </p>
    </Form>
  );
}
