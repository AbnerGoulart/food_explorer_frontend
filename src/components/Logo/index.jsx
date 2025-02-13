import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { API_BASE_URL } from "../../services/api";

export function Logo ({ size = "2rem", head }){
  const {type} = useContext(AuthContext)

  return (
    <Container size={size}>
      <img src={`${API_BASE_URL}/files/logo.svg`} alt="logo" />
      <a href="/">
        <h1>food explorer</h1>
      </a>
      {type === "admin" && head ? <span>admin</span> : null}
    </Container>
  )
}