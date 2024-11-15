import { Container } from "./styles";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <ButtonText title="Sair" />
            </Link>
          </div>
          <Footer />
        </CartProvider>
      </DishesProvider>
    </Container>
  );
}
