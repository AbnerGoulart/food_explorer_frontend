import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Logo } from "../../components/Logo";
import { Container } from "./styles";


export function SignUp() {
  return (
    <Container className="app">
      <Logo />
      <div className="wrapper">
        <p>Seu nome</p>
        <input type="text" placeholder="Exemplo: Maria Alice" />
        <p>Email</p>
        <input type="email" placeholder="exemplo@email.com" />
        <p>Senha</p>
        <input type="password" placeholder="No mínimo 6 caracteres" />
        <Button title="Criar conta" />
      </div>
      <Link to="/">
        <ButtonText title="Já tenho uma conta" />
      </Link>
    </Container>
  )
}