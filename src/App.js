// Rotas de link
import AppRoutes from "./routes";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

theme.typography.h2 = {
  fontWeight: "700",
  [theme.breakpoints.up("xs")]: {
    fontSize: "2.125rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "3.125rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.125rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3.125rem",
  },
};

theme.typography.h5 = {
  fontWeight: "300",
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.125rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
};

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
