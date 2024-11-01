import { Poster } from "../../components/Poster";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MenuCarousel } from "../../components/MenuCarousel";

import { CounterProvider } from "../../contexts/CounterContext";

export function Home() {
  return (
    <CounterProvider>
      <Header />
      <Poster />
      <MenuCarousel title="Pratos do Dia" />
      <MenuCarousel title="Promoção" />
      <Footer />
    </CounterProvider>
  );
}
