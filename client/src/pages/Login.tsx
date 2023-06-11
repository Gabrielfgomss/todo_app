import Form from "../components/Form";
import { useState } from "react";
import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  const [invalidUser, setInvalidUser] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault()
    const itExist = true;
    console.log('work')
    navigate('/dashboard')

    if (!itExist) {
      // setInvalidUser(true)
      // setInvalidPassword(true)
    }

  }
  
  return (
    <Form
      title='Faça seu login!'
      buttonAction='Login'
      handleSubmit={() => handleSubmit}
      invalidUser={invalidUser}
      setInvalidUser={setInvalidUser}
      invalidPassword={invalidPassword}
      setInvalidPassword={setInvalidPassword} >
      <p className="text-text text-center">Ou crie sua {''}
        <Link to='/signin' className="hover:font-medium underline">conta aqui!</Link>
      </p>
    </Form>
  )
}
