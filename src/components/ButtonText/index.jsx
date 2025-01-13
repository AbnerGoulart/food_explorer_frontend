import { Container } from "./styles";

export function ButtonText({ children, onClick, ...rest }) {
  return (
    <Container type="button" onClick={onClick} {...rest}>
      {children}
    </Container>
  );
}
