import { Poster } from "../../components/Poster";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { FoodMenu } from "../../components/FoodMenu";

import { DishesProvider } from "../../contexts/DishesContext";

export function Home() {
  return (
    <DishesProvider>
      <Header />
      <Poster />
      <FoodMenu />
      <Footer />
    </DishesProvider>
  );
}
