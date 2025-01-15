import { Container } from "./styles";

export function Poster() {
  return (
    <Container>
      <img src="../../../public/card.svg" alt="poster" />
      <div className="description">
        <h1>Sabores inigualáveis</h1>
        <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>
      </div>
    </Container>
  );
}
