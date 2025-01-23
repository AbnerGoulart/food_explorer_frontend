import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export function Logo ({ size = "2rem", isAdmin }){
  const navigate = useNavigate()

  function returnToHome(){
    navigate('/')
  } 
  return (
    <Container size={size} onClick={returnToHome}>
      <img src="../../../logo.svg" alt="logo" />
      <h1>food explorer</h1>
      {isAdmin ? <span>admin</span> : null}
    </Container>
  )
}