import React from 'react';
import {
  TextField,
  ThemeProvider
} from "@material-ui/core";
import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme)

function App() {
  return <ThemeProvider theme={theme}><TextField label="Filled" variant="filled" /></ThemeProvider>;
}

export default App;
