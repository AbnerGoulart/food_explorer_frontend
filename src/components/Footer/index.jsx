import { Container } from "./styles";
import { Logo } from "../Logo";

export function Footer() {
  return (
    <Container>
      <div className="footer-wrapper">
        <div className="logo">
          <Logo size="1.2rem" head={false}/>
        </div>
        <div>
          <p>&copy; 2024 - Todos os direitos reservados</p>
        </div>
      </div>
    </Container>
  );
}
