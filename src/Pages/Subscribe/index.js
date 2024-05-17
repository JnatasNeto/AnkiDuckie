import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Body
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

// Typography
import Typography from "@mui/material/Typography";
// Header
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

// Images
// import BackgroundImageHome from "../../assets/images/Background-Gradient.svg";
const Logo = require("../../logo.svg").ReactComponent;

function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError("");
        setSuccess("");
      }, 3000); // Mensagem desaparecerá após 3 segundos

      return () => clearTimeout(timer);
    }
  }, [error, success]);

  const handleSubscribe = async () => {
    if (!name || !email || !password) {
      setError("Todos os campos são obrigatórios");
      setSuccess(""); // Clear success message when there is an error
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/auth/register", {
        name,
        email,
        password,
      });
      console.log("Cadastro realizado com sucesso:", response.data);
      const token = response.data?.token; // Certifique-se de que está acessando o campo correto
      if (token) {
        localStorage.setItem("token", token);
        console.log("Token armazenado:", localStorage.getItem("token"));
        setName("");
        setEmail("");
        setPassword("");
        setError("");
        setSuccess("Cadastrado com sucesso!");
      } else {
        throw new Error("Token não encontrado na resposta");
      }
    } catch (error) {
      console.log("Erro durante a inscrição:", error);
      setSuccess(""); // Clear success message when there is an error
      if (error.response && error.response.status === 404) {
        setError("Credenciais inválidas");
      } else {
        setError(error.message || "Erro ao fazer cadastro");
      }
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          margin: "0",
          padding: "0 !important",
          minWidth: "100vw",
          height: "100vh",
          overflowX: "hidden",
        }}
      >
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            // backgroundImage: `url('${BackgroundImageHome}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AppBar
            position="static"
            sx={{
              background: "transparent",
              boxShadow: "none",
              color: "black",
            }}
          >
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Box>
                <Logo />
              </Box>
              <Box>
                <Link to="/login">
                  <Button
                    variant="text"
                    sx={{
                      background: "linear-gradient(45deg, #20212B, #16171F)",
                      padding: ".5rem 1rem",
                      borderRadius: ".5rem",
                      textTransform: "capitalize",
                      color: "#FFF",
                    }}
                  >
                    Login
                  </Button>
                </Link>
              </Box>
            </Toolbar>
          </AppBar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              textAlign: "center",
              color: "#FFF",
            }}
          >
            {error && <Alert severity="error" sx={{ mt: 1, mb: 1 }}>{error}</Alert>}
            {success && <Alert severity="success" sx={{ mt: 1, mb: 1 }}>{success}</Alert>}
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "#000" }}
            >
              Aprenda com flashcards, <br /> estude menos!
            </Typography>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& .MuiTextField-root": {
                  m: 1,
                  width: "40ch",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                fullWidth
                required
                id="outlined-required-name"
                label="Name"
                variant="filled"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                fullWidth
                required
                id="outlined-required-email"
                label="Email"
                variant="filled"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handleSubscribe}>
                  Cadastrar
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Subscribe;
