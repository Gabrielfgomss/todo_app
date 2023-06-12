/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    customPrimary?: PaletteOptions['primary'];
    customSecondary?: PaletteOptions['primary'];
    customText: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
    light: PaletteOptions['primary'];
  }
  interface PaletteOptions {
    customPrimary?: PaletteOptions['primary'];
    customSecondary?: PaletteOptions['primary'];
    customText: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
    light: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    customPrimary?: PaletteOptions['primary'];
    customSecondary?: PaletteOptions['primary'];
    customText: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
    light: PaletteOptions['primary'];
  }
}

declare module '@mui/material/TextField/TextField' {
  interface TextFieldPropsColorOverrides {
    customPrimary?: PaletteOptions['primary'];
    customSecondary?: PaletteOptions['primary'];
    customText: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
    light: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Fab' {
  interface FabPropsColorOverrides {
    customPrimary?: PaletteOptions['primary'];
    customSecondary?: PaletteOptions['primary'];
    customText: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
    light: PaletteOptions['primary'];
  }
}
