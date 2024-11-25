import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Logo } from "../../components/Logo";
import { Container } from "./styles";


export function SignIn() {
  return (
    <Container className="app">
      <Logo />
      <div className="wrapper">
        <p>Email</p>
        <input type="email" placeholder="exemplo@email.com" />
        <p>Senha</p>
        <input type="password" placeholder="No mínimo 6 caracteres" />
        <Button title="Entrar" />
      </div>
        <Link to={"/register"}>
          <ButtonText title="Criar uma conta" />
        </Link>
    </Container>
  )
}