import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Logo } from "../../components/Logo";
import { Container } from "./styles";
import { useState, useContext } from "react";
import { Input } from "../../components/Input";

import { api } from "../../api";
import { AuthContext } from "../../contexts/AuthContext";


export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signIn } = useContext(AuthContext)

  async function handleSignIn (){
    try {
      await signIn(email, password)
    } catch (error) {
      alert("Usuário inválido/ não autenticado")
    }
  }

  return (
    <Container className="app">
      <Logo />
      <div className="wrapper">
        <h1>Faça login</h1>
        <div className="content">
          <p>Email</p>
          <Input 
            type="email" 
            placeholder="exemplo@email.com"
            onChange={event => setEmail(event.target.value)}
          />
          <p>Senha</p>
          <Input 
            type="password" 
            placeholder="No mínimo 6 caracteres"
            onChange={event => setPassword(event.target.value)}
          />
          <Button title="Entrar" onClick={handleSignIn}/>
          <Link to={"/register"}>
            <ButtonText>
              Criar uma conta
            </ButtonText>
          </Link>
        </div>
      </div>
    </Container>
  )
}