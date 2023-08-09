import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import LayoutPage from './pages/layout';

import { ThemeProvider, createTheme } from '@mui/material/styles'

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#016F22',
    },
    secondary: {
      main: '#0c6924',
    },
  },
};

const theme = createTheme(themeOptions);

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <CssBaseline />
          <LayoutPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
