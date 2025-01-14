import { Container } from "./styles";
import { Logo } from "../Logo";

export function Footer() {
  return (
    <Container>
      <div className="wrapper">
        <Logo size="1.2rem" />
        <div>
          <p>&copy; 2024 - Todos os direitos reservados</p>
        </div>
      </div>
    </Container>
  );
}
