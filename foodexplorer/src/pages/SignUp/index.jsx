import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Logo } from "../../components/Logo";


export function SignUp() {
  return (
    <div className="app">
      <Logo />
      <p>Seu nome</p>
      <input type="text" placeholder="Exemplo: Maria Alice" />
      <p>Email</p>
      <input type="email" placeholder="exemplo@email.com" />
      <p>Senha</p>
      <input type="password" placeholder="No mínimo 6 caracteres" />
      <Button title="Criar conta" />
      <ButtonText title="Já tenho uma conta" />
    </div>
  )
}