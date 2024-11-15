import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Logo } from "../../components/Logo";


export function SignIn() {
  return (
    <div className="app">
      <Logo />
      <p>Email</p>
      <input type="email" placeholder="exemplo@email.com" />
      <p>Senha</p>
      <input type="password" placeholder="No mínimo 6 caracteres" />
      <Button title="Entrar" />
      <ButtonText title="Criar uma conta" />
    </div>
  )
}