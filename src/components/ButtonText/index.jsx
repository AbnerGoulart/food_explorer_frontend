import { Container } from "./styles";

export function ButtonText ({ title, ...requestAnimationFrame }){
  return (
    <Container type="button" >
      {title}
    </Container>
  );
}