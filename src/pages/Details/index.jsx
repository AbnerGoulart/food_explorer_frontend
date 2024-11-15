import { DescriptionCard } from "../../components/DescriptionCard";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Poster } from "../../components/Poster";

import { CartProvider } from "../../contexts/CartContext";
import { DishesProvider } from "../../contexts/DishesContext";

export function Details() {
  return (
    <DishesProvider>
      <CartProvider>
        <Header />
        <DescriptionCard />
        <Footer />
      </CartProvider>
    </DishesProvider>
  );
}
