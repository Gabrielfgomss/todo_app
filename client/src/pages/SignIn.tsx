import Form from "../components/Form";
import { FormEvent } from "react";

export default function SignIn() {

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(event?.currentTarget)
  }

  return (
    <Form title='Crie sua conta!' buttonAction='Criar conta' handleSubmit={() => handleSubmit}></Form>
  )
}
