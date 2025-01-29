import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Logo } from "../../components/Logo";
import { Container } from "./styles";
import { Input } from "../../components/Input";
import { api } from "../../api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const navigate = useNavigate();

  const handleChangeSenha = (event) => {
    const passwordEntered = event.target.value;
    setPassword(passwordEntered);

    if (passwordEntered.length < 6) {
      setErrorPassword("A senha deve ter pelo menos 6 caracteres.");
    } else {
      setErrorPassword("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.length >= 6) {
      alert("Conta criada com sucesso!");
    } else {
      alert("Corrija os erros antes de criar sua conta.");
    }
  };

  const handleSignUp = () => {
    if (!name || !email || !password) {
      alert("Preencha todos os campos");
    }

    api
      .post("/signup", {
        name: name,
        email: email,
        password: password,
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert("Erro ao cadastrar");
      });
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
          <Input
            type="text"
            placeholder="Exemplo: Maria Alice"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <p>Email</p>
          <Input
            type="email"
            placeholder="exemplo@email.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p>Senha</p>
          <Input
            type="password"
            placeholder="No mínimo 6 caracteres"
            value={password}
            onChange={handleChangeSenha}
            required
          />
          {errorPassword && (
            <p 
              className="error" 
              style={{ color: "red" }}
            >
              {errorPassword}
            </p>
          )}
          <Button title="Criar conta" type="submit" onClick={handleSignUp} />
          <Link to="/">
            <ButtonText>Já tenho uma conta</ButtonText>
          </Link>
        </form>
      </div>
    </Container>
  );
}
