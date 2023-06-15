import {
  ReactNode,
  useState,
  FormEvent,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';
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
  userError?: boolean;
  passwordError?: boolean;
  userMessage?: string;
  passwordMessage?: string;
  setFormError: Dispatch<
    SetStateAction<{
      userError: boolean;
      passwordError: boolean;
      userMessage: string;
      passwordMessage: string;
    }>
  >;
}

export default function Form({
  title,
  children,
  buttonAction,
  handleSubmit,
  userError,
  passwordError,
  userMessage,
  passwordMessage,
  setFormError,
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
          error={userError}
          required
          helperText={userError ? userMessage : ''}
          onBlur={() =>
            setFormError((prevData) => ({
              ...prevData,
              userError: false,
            }))
          }
        />
        <TextField
          label="Senha"
          color="customSecondary"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          error={passwordError}
          helperText={passwordError ? passwordMessage : ''}
          onBlur={() =>
            setFormError((prevData) => ({
              ...prevData,
              passwordError: false,
            }))
          }
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
