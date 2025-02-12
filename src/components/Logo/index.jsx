import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { API_BASE_URL } from "../../services/api";

export function Logo ({ size = "2rem", head }){
  const navigate = useNavigate()
  const {type} = useContext(AuthContext)

  return (
    <Container size={size}>
      <a href="/">
        <img src={`${API_BASE_URL}/files/logo.svg`} alt="logo" />
        <h1>food explorer</h1>
        {type === "admin" && head ? <span>admin</span> : null}
      </a>
    </Container>
  )
}