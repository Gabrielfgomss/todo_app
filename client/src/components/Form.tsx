import { ReactNode, useState, FormEvent, useContext } from 'react';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField/TextField';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormContext } from '../context/ContextForm.tsx';

interface FormProps {
  title: string;
  children?: ReactNode;
  buttonAction: string;
  // eslint-disable-next-line no-unused-vars
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  invalidUser?: boolean;
  invalidPassword?: boolean;
}

export default function Form({
  title,
  children,
  buttonAction,
  handleSubmit,
  invalidUser,
  invalidPassword,
}: FormProps) {
  const context = useContext(FormContext);
  const formData = context?.formData ?? { user: '', password: '' };
  const [showPassword, setShowPassword] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleChange = context?.handleChange ?? (() => {});
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <form
      className="m-auto bg-[#F9F5F6] flex flex-col gap-4 items-center p-4 rounded-2xl"
      onSubmit={handleSubmit}
    >
      <h1 className="text-text font-semibold">{title}</h1>
      <FormControl className="gap-4">
        <TextField
          label="Nome de usuário"
          id="user"
          name="user"
          value={formData.user}
          onChange={handleChange}
          color="customSecondary"
          error={invalidUser}
          required
          helperText={invalidUser ? 'Usuário inexistente ou errado' : ''}
        />
        <TextField
          label="Senha"
          color="customSecondary"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          error={invalidPassword}
          helperText={invalidPassword ? 'Senha incorreta' : ''}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" color="customPrimary" type="submit">
          {buttonAction}
        </Button>
        {children}
      </FormControl>
    </form>
  );
}
