import { Container } from "./styles";

export function ButtonText ({ title, onClick, ...props }){
  return (
    <Container type="button" onClick={onClick}>
      {title}
    </Container>
  );
}