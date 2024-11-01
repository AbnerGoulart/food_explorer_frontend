import { Container } from "./styles";

export function Button({ title, onClick }) {
  return (
    <Container type="button" onClick={onClick}>
      {title}
    </Container>
  );
}
