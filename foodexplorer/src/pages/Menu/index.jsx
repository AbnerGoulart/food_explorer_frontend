import { Container } from "./styles";

import { CounterProvider } from "../../contexts/CounterContext";
import { DishesProvider } from "../../contexts/DishesContext";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";

export function Menu() {
  return (
    <Container>
      <DishesProvider>
        <CounterProvider>
          <Header />
          <div className="content">
            <input type="text" placeholder="Busque por pratos ou ingredientes" />
            <ButtonText title="Sair" />
          </div>
          <Footer />
        </CounterProvider>
      </DishesProvider>
    </Container>
  );
}
