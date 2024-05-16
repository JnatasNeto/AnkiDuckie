// Rotas de link
import AppRoutes from "./routes";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme({
  typography: {
    h1: {
      fontFamily: '"Poppins", "Inter", sans-serif',
    },
    h2: {
      fontFamily: '"Poppins", "Inter", sans-serif',
    },
    h3: {
      fontFamily: '"Poppins", "Inter", sans-serif',
    },
    h4: {
      fontFamily: '"Poppins", "Inter", sans-serif',
    },
    h5: {
      fontFamily: '"Poppins", "Inter", sans-serif',
    },
    h6: {
      fontFamily: '"Poppins", "Inter", sans-serif',
    },
    subtitle1: {
      fontFamily: '"Poppins", "Inter", sans-serif',
    },
    subtitle2: {
      fontFamily: '"Poppins", "Inter", sans-serif',
    },
    body1: {
      fontFamily: '"Poppins", "Inter", sans-serif',
    },
    body2: {
      fontFamily: '"Poppins", "Inter", sans-serif',
    },
    button: {
      fontFamily: '"Poppins", "Inter", sans-serif',
    },
    caption: {
      fontFamily: '"Poppins", "Inter", sans-serif',
    },
    overline: {
      fontFamily: '"Poppins", "Inter", sans-serif',
    },
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
