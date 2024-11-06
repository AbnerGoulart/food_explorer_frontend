import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { CounterProvider } from "../../contexts/CounterContext";

export function Details() {
  return (
    <CounterProvider>
      <Header />
      
      <Footer />
    </CounterProvider>
  );
}
