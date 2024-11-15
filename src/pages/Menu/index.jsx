import { Container } from "./styles";

import { CartProvider } from "../../contexts/CartContext";
import { DishesProvider } from "../../contexts/DishesContext";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";

export function Menu() {
  return (
    <Container>
      <DishesProvider>
        <CartProvider>
          <Header />
          <div className="content">
            <input type="text" placeholder="Busque por pratos ou ingredientes" />
            <ButtonText title="Sair" />
          </div>
          <Footer />
        </CartProvider>
      </DishesProvider>
    </Container>
  );
}
