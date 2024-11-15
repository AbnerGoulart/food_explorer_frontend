import { Poster } from "../../components/Poster";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { FoodMenu } from "../../components/FoodMenu";

import { CartProvider } from "../../contexts/CartContext";
import { DishesProvider } from "../../contexts/DishesContext";

export function Home() {

  return (
    <DishesProvider>
      <CartProvider>
        <Header />
        <Poster />
        <FoodMenu />
        <Footer />
      </CartProvider>    
    </DishesProvider>
  );
}
