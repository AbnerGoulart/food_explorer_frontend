import { DescriptionCard } from "../../components/DescriptionCard";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Poster } from "../../components/Poster";

import { CounterProvider } from "../../contexts/CartContext";
import { DishesProvider } from "../../contexts/DishesContext";

export function Details() {
  return (
    <DishesProvider>
      <CounterProvider>
        <Header />
        <DescriptionCard />
        <Footer />
      </CounterProvider>
    </DishesProvider>
  );
}
