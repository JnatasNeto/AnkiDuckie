import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password
      });
      console.log("Login realizado com sucesso:", response.data);
      const token = response.data?.token; // Certifique-se de que está acessando o campo correto
      if (token) {
        localStorage.setItem("token", token);
        console.log("Token armazenado:", localStorage.getItem("token"));
      } else {
        throw new Error("Token não encontrado na resposta");
      }
    } catch (error) {
      console.log("Erro durante o login:", error);
      if (error.response && error.response.status === 401) {
        setError("Credenciais inválidas");
      } else {
        setError(error.message || "Erro ao fazer login");
      }
    }
  };

  return (
    <div>
      <form>
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
        <Button type="button" onClick={handleLogin}>Login</Button>
      </form>
    
      <Link to="/subscribe">
        <Button>Cadastre-se</Button>
      </Link>

      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
