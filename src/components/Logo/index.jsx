import { Container } from "./styles";

export function Logo ({ size = "2rem", isAdmin }){
  return (
    <Container size={size}>
      <img src="../../../logo.svg" alt="logo" />
      <h1>food explorer</h1>
      {isAdmin ? <span>admin</span> : null}
    </Container>
  )
}