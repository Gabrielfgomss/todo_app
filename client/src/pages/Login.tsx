import { useState, FormEvent, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../components/Form.tsx';
import { FormContext } from '../context/ContextForm.tsx';

export default function Login() {
  const context = useContext(FormContext);
  const formData = context?.formData ?? { user: '', password: '' };
  const [invalidUser, setInvalidUser] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const itExist = false;
    navigate('/dashboard');
    if (!itExist) {
      setInvalidUser(true);
      setInvalidPassword(true);
    }
  };

  return (
    <Form
      title="Faça seu login!"
      buttonAction="Login"
      handleSubmit={handleSubmit}
      invalidUser={invalidUser}
      invalidPassword={invalidPassword}
    >
      <p className="text-text text-center">
        Ou crie sua
        <Link to="/signin" className="hover:font-medium underline">
          conta aqui!
        </Link>
      </p>
    </Form>
  );
}
