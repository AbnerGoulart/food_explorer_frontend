import { Poster } from "../../components/Poster";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { FoodMenu } from "../../components/FoodMenu";

import { CounterProvider } from "../../contexts/CounterContext";
import { DishesContext, DishesProvider } from "../../contexts/DishesContext";
import { useContext } from "react";

// import { useEffect, useState } from "react";
// import { api } from "../../api";

export function Home() {
  // const [dishes, setDishes] = useState([]);

  // useEffect(() => {
  //   fetchDishes();
  // }, []);

  // const fetchDishes = () => {
  //   api.get("/dishes").then((response) => {
  //     setDishes(response.data);
  //     console.log(dishes);
  //   });
  // };
  // const { alisson } = useContext(DishesContext)

  return (
    <DishesProvider>
      <CounterProvider>
        <Header />
        <Poster />
        <FoodMenu />
        <Footer />
      </CounterProvider>    
    </DishesProvider>
  );
}
