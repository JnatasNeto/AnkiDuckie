import { Link } from "react-router-dom";

import { Button } from "@mui/material";

import {useState} from 'react';

function Subscribe() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value
    })
  }

  const handleForm = async (event) =>{
    // console.log(formData)
    try {
      event.preventDefault()
      const response = await fetch(`http://localhost:8080/auth/register`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {'Content-Type': 'application/json'}
      })
      const json = await response.json()
      console.log(response.status)
      console.log(json)
      
    } catch (error) {
      
    }
  }

 return(
  <div>
    <form onSubmit={handleForm}>

      <input type="text" placeholder="Seu nome" required value={formData.name} onChange={(e) => {handleFormEdit(e, 'name')}}/>
      <input type="email" placeholder="Seu email" required value={formData.email} onChange={(e) => {handleFormEdit(e, 'email')}}/>
      <input type="current-password" placeholder="Sua senha" required value={formData.password} onChange={(e) => {handleFormEdit(e, 'password')}}/>
      <Button onClick={handleForm}>Cadastrar</Button>
    </form>
  
    <Link to="/login">
   <Button
   >
     Login
   </Button>
</Link>

  </div>

 );
}

export default Subscribe;
