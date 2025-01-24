import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export function Logo ({ size = "2rem", head }){
  const navigate = useNavigate()
  const {type} = useContext(AuthContext)

  function returnToHome(){
    navigate('/')
  } 
  
  return (
    <Container size={size} onClick={returnToHome}>
      <img src="../../../logo.svg" alt="logo" />
      <h1>food explorer</h1>
      {type === "admin" && head ? <span>admin</span> : null}
    </Container>
  )
}