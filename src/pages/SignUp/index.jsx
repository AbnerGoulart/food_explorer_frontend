import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Logo } from "../../components/Logo";
import { Container } from "./styles";
import { Input } from "../../components/Input";
import { api } from "../../api";
import theme from "../../styles/theme";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
  });

  const navigate = useNavigate();

  const keyDown = (event) => {
    if (event.key === "Enter") {
      handleSignUp();
    }
  };

  const styleError = (field) => ({
    border: errors[field] ? `2px solid ${theme.COLORS.TOMATO_200}` : "none",
  });

  const handleChangeSenha = (event) => {
    const passwordEntered = event.target.value;
    setPassword(passwordEntered);

    if (passwordEntered.length < 6) {
      setErrorPassword("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setErrorPassword("");
  };

  const handleSignUp = () => {
    const newErrors = {
      name: !name,
      email: !email,
      password: !password || password.length < 6,
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.password) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    api
      .post("/signup", { name, email, password })
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        alert("Erro ao cadastrar");
      });
  };

  return (
    <Container className="app">
      <div className="logo">
        <Logo />
      </div>
      <div className="wrapper" onKeyDown={keyDown}>
        <h1>Crie sua conta</h1>
        <form className="content">
          <p>Seu nome</p>
          <Input
            type="text"
            placeholder="Exemplo: Maria Alice"
            onChange={(e) => setName(e.target.value)}
            style={styleError("name")}
          />
          <p>Email</p>
          <Input
            type="email"
            placeholder="exemplo@email.com"
            onChange={(e) => setEmail(e.target.value)}
            style={styleError("email")}
          />
          <p>Senha</p>
          <Input
            type="password"
            placeholder={errorPassword || "No mínimo 6 caracteres"}
            value={password}
            onChange={handleChangeSenha}
            style={styleError("password")}
          />
          <Button title="Criar conta" type="button" onClick={handleSignUp} />
          <Link to="/">
            <ButtonText>Já tenho uma conta</ButtonText>
          </Link>
        </form>
      </div>
    </Container>
  );
}
