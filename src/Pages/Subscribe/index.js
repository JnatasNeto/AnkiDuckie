import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = async () => {
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
      } else {
        throw new Error("Token não encontrado na resposta");
      }
    } catch (error) {
      console.log("Erro durante a inscrição:", error);
      if (error.response && error.response.status === 404) {
        setError("Credenciais inválidas");
      } else {
        setError(error.message || "Erro ao fazer cadastro");
      }
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Seu nome"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Seu email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Sua senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="button" onClick={handleSubscribe}>
          Cadastrar
        </Button>
      </form>

      <Link to="/login">
        <Button>Login</Button>
      </Link>

      {error && <p>{error}</p>}
    </div>
  );
}

export default Subscribe;
