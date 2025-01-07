import { Container } from "./styles";

export function ButtonText({ children, onClick, ...props }) {
  return (
    <Container type="button" onClick={onClick} {...props}>
      {children}
    </Container>
  );
}
