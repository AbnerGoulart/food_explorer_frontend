import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Logo } from "../../components/Logo";
import { Container } from "./styles";
import { Input } from "../../components/Input";

export function SignUp() {
  const [senha, setSenha] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const handleChangeSenha = (event) => {
    const senhaDigitada = event.target.value;
    setSenha(senhaDigitada);

    if (senhaDigitada.length < 6) {
      setErroSenha("A senha deve ter pelo menos 6 caracteres.");
    } else {
      setErroSenha("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (senha.length >= 6) {
      alert("Conta criada com sucesso!");
    } else {
      alert("Corrija os erros antes de criar sua conta.");
    }
  };

  return (
    <Container className="app">
      <div className="logo">
        <Logo />
      </div>
      <div className="wrapper">
        <h1>Crie sua conta</h1>
        <form className="content" onSubmit={handleSubmit}>
          <p>Seu nome</p>
          <Input type="text" placeholder="Exemplo: Maria Alice" required />
          <p>Email</p>
          <Input type="email" placeholder="exemplo@email.com" required />
          <p>Senha</p>
          <Input
            type="password"
            placeholder="No mínimo 6 caracteres"
            value={senha}
            onChange={handleChangeSenha}
            required
          />
          {erroSenha && <p className="error" style={{ color: "red" }}>{erroSenha}</p>}
          <Button title="Criar conta" type="submit" />
          <Link to="/">
            <ButtonText>Já tenho uma conta</ButtonText>
          </Link>
        </form>
      </div>
    </Container>
  );
}
