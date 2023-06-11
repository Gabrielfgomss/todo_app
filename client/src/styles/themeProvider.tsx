import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { } from '@mui/x-date-pickers/themeAugmentation';

const theme = createTheme({
  palette: {
    customPrimary: { main: '#a3b18a' },
    customSecondary: { main: '#344e41' },
    customText: { main: '#1b1911' },
    white: { main: '#f9f5f6' },
    light: { main: '#DAD7CD' }
  }
})

export default function CustomStyles({ children }: React.PropsWithChildren) {

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}