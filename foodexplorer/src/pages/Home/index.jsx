import { Poster } from "../../components/Poster";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MenuCarousel } from "../../components/MenuCarousel";

import { CounterProvider } from "../../contexts/CounterContext";
import { DishesProvider } from "../../contexts/DishesContext";

import { useEffect, useState } from "react";
import { api } from "../../api";

export function Home() {
  const [dishes, setDishes] = useState(null);

  useEffect(() => {
    fetchDishes();
  }, []);

  const fetchDishes = () => {
    api.get("/dishes").then((response) => {
      setDishes(response.data);
      console.log(dishes);
    });
  };

  return (
    <DishesProvider>
      <CounterProvider>
        <Header />
        <Poster />
        <MenuCarousel title="Pratos do Dia" />
        <MenuCarousel title="Promoção" />
        <Footer />
      </CounterProvider>
    </DishesProvider>
  );
}
