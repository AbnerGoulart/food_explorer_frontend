import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Logo } from "../../components/Logo";
import { Container } from "./styles";
import { Input } from "../../components/Input";


export function SignUp() {
  return (
    <Container className="app">
      <Logo />
      <div className="wrapper">
        <h1>Crie sua conta</h1>
        <p>Seu nome</p>
        <Input type="text" placeholder="Exemplo: Maria Alice" />
        <p>Email</p>
        <Input type="email" placeholder="exemplo@email.com" />
        <p>Senha</p>
        <Input type="password" placeholder="No mínimo 6 caracteres" />
        <Button title="Criar conta" />
        <Link to="/">
          <ButtonText>
            Já tenho uma conta
          </ButtonText>
        </Link>
      </div>
    </Container>
  )
}