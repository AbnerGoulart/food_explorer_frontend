import { CounterProvider } from "../../contexts/CounterContext";
import { DishesProvider } from "../../contexts/DishesContext";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function Menu () {
  return(
    <DishesProvider>
      <CounterProvider>
        <Header />
        <input type="text" placeholder="Busque por pratos ou ingredientes" />
        <Footer />
      </CounterProvider>    
    </DishesProvider>
  )
}