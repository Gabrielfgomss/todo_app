import { ReactNode, useState, MouseEvent } from 'react';
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from "@mui/material/TextField/TextField";
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface FormProps {
  title: string
  children?: ReactNode
  buttonAction: string
  handleSubmit: () => void
  invalidUser?: boolean 
  setinvalidUser?: () => boolean 
  invalidPassword?: boolean 
  setinvalidPassword?: () => boolean
}

export default function Form({ title, children, buttonAction, handleSubmit, invalidUser, setinvalidUser, invalidPassword, setinvalidPassword }: FormProps) {

  const [showPassword, setShowPassword] = useState(false);
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form className="m-auto bg-[#F9F5F6] flex flex-col gap-4 items-center p-4 rounded-2xl" onSubmit={handleSubmit}>
      <h1 className="text-text font-semibold">{title}</h1>
      <FormControl className="gap-4">
        <TextField
          id='usuario'
          label="Nome de usuário"
          color="customSecondary"
          error={invalidUser ? true : false}
          required={true}
          helperText={invalidUser ? 'Usuário inexistente ou errado' : ''}
          onBlur={() => setinvalidUser(false)} />
        <TextField
          id='senha'
          label="Senha"
          color="customSecondary"
          required
          error={invalidPassword ? true : false}
          helperText={invalidPassword ? 'Senha incorreta' : ''}
          onBlur={() => setinvalidPassword(false)}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment:
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
          }} />
        <Button variant="contained" color="customPrimary" type="submit">
          {buttonAction}
        </Button>
        {children}
      </FormControl>
    </form >
  )
}
